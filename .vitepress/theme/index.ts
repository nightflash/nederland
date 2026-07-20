import { inject } from '@vercel/analytics';
import DefaultTheme from 'vitepress/theme';
import './custom.css';

if (typeof window !== 'undefined') {
  inject({
    mode: import.meta.env.DEV ? 'development' : 'production',
  });
}

export default DefaultTheme;
