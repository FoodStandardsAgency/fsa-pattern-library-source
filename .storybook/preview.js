import '../src/index.js';

const customViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  small: {
    name: 'Small Screen',
    styles: {
      width: '1024px',
      height: '1024px',
    },
  },
  medium: {
    name: 'Laptop / Medium',
    styles: {
      width: '1440px',
      height: '1024px',
    },
  },
  large: {
    name: 'Large',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [],
      locales: '',
    },
  },
  a11y: {
    config: {
      rules: [
        {
          // Disable the color contrast checker because we are developing our design using prepared colors and make sure
          // we want to usw it.
          id: 'color-contrast',
          enabled: false,
        },
      ],
    },
  },
}
