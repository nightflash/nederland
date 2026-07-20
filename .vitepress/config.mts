import { defineConfig } from 'vitepress';

const siteUrl = 'https://guide.devnul.nl';

function getCanonicalUrl(page: string) {
  const path = page
    .replace(/(^|\/)index\.md$/, '$1')
    .replace(/\.md$/, '');

  return new URL(path ? `/${path}` : '/', siteUrl).href;
}

export default defineConfig({
  srcDir: './ru',
  lang: 'ru-RU',
  title: 'Нидерланды',
  titleTemplate: ':title | Гид по Нидерландам',
  description:
    'Практический русскоязычный гид по документам, жилью, медицине и интеграции в Нидерландах.',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: siteUrl,
  },

  head: [
    ['meta', { property: 'og:locale', content: 'ru_RU' }],
    ['meta', { property: 'og:site_name', content: 'Гид по Нидерландам' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
  ],

  transformHead({ page, pageData, title, description }) {
    if (pageData.isNotFound) return;

    const canonicalUrl = getCanonicalUrl(page);
    const isHomePage = canonicalUrl === `${siteUrl}/`;
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': isHomePage ? 'WebSite' : 'WebPage',
      name: pageData.title,
      description,
      url: canonicalUrl,
      inLanguage: 'ru-RU',
      ...(isHomePage
        ? {}
        : {
            isPartOf: {
              '@type': 'WebSite',
              name: 'Гид по Нидерландам',
              url: siteUrl,
            },
          }),
    };

    return [
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['meta', { property: 'og:type', content: isHomePage ? 'website' : 'article' }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: canonicalUrl }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      [
        'script',
        { type: 'application/ld+json' },
        JSON.stringify(structuredData).replace(/</g, '\\u003c'),
      ],
    ];
  },

  rewrites: {
    'readme.md': 'index.md',
    'documents/readme.md': 'documents/index.md',
    'integration/readme.md': 'integration/index.md',
    'medicine/readme.md': 'medicine/index.md',
  },

  themeConfig: {
    search: {
      provider: 'local',
    },

    nav: [
      { text: 'Главная', link: '/' },
      {
        text: 'GitHub',
        link: 'https://github.com/nightflash/nederland',
      },
    ],

    sidebar: [
      {
        text: 'Документы',
        items: [
          { text: 'Обзор', link: '/documents/' },
          { text: 'Permit, BSN и DigiD', link: '/documents/docs' },
          { text: 'Доверенности', link: '/documents/notary' },
          {
            text: 'Новорождённый ребёнок',
            link: '/documents/newborn',
            items: [
              { text: 'Фото своими руками', link: '/documents/newborn-photos' },
              {
                text: 'Биометрический паспорт',
                link: '/documents/biometric-passport-for-child',
              },
            ],
          },
          { text: 'Виза для родственников', link: '/documents/visa' },
        ],
      },
      {
        text: 'Интеграция',
        items: [
          { text: 'Обзор', link: '/integration/' },
          { text: 'Интеграционные экзамены', link: '/integration/exams' },
          { text: 'ПМЖ', link: '/integration/prp' },
          { text: 'Гражданство', link: '/integration/citizenship' },
        ],
      },
      {
        text: 'Жильё',
        items: [
          { text: 'Аренда', link: '/housing/rent' },
          { text: 'Покупка', link: '/housing/buy' },
          { text: 'Снижение ставки', link: '/housing/percent' },
        ],
      },
      {
        text: 'Медицина',
        items: [
          { text: 'Обзор', link: '/medicine/' },
          { text: 'Страховка', link: '/medicine/insurance' },
          { text: 'Медицинская помощь', link: '/medicine/gp' },
        ],
      },
      {
        text: 'Дети и образование',
        items: [
          { text: 'Система образования', link: '/children/education' },
          { text: 'Прескул и VVE', link: '/children/preschool' },
          { text: 'Виды школ', link: '/children/school-types' },
        ],
      },
      { text: '☕ Поддержать проект', link: '/donate' },
    ],

    outline: {
      level: [2, 3],
      label: 'На этой странице',
    },

    docFooter: {
      prev: 'Назад',
      next: 'Дальше',
    },

    lastUpdated: {
      text: 'Обновлено',
      formatOptions: {
        forceLocale: true,
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      },
    },

    editLink: {
      pattern: 'https://github.com/nightflash/nederland/edit/master/ru/:path',
      text: 'Редактировать на GitHub',
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/nightflash/nederland',
      },
    ],
  },
});
