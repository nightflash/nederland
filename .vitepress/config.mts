import { defineConfig } from 'vitepress';

export default defineConfig({
  srcDir: './ru',
  lang: 'ru-RU',
  title: 'Нидерланды',
  description: 'Практический гид по жизни в Нидерландах',
  cleanUrls: true,
  lastUpdated: true,

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
          { text: 'Ребёнок в Нидерландах', link: '/documents/newborn' },
          { text: 'Фото на документы', link: '/documents/newborn-photos' },
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
