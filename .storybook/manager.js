// .storybook/manager.js

import { addons } from '@storybook/addons';
import fsaTheme from './fsaTheme';

addons.setConfig({
  theme: fsaTheme,
});