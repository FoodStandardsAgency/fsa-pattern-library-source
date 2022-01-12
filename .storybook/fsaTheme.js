// .storybook/fsaTheme.js

import { create } from '@storybook/theming';
import logo from '../src/components/general/Header/logo-en.svg';

export default create({
  base: 'light',
  brandTitle: 'FSA Pattern Library',
  brandUrl: 'https://www.food.gov.uk',
  brandImage: logo,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
});