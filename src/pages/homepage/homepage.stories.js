import homepage from './homepage.html.twig';

export default {
  title: 'Pages/Homepage',
  parameters: {
    controls: {
      disabled: true,
    },
    layout: 'fullscreen',
  }
};

export const Homepage = ({ label, ...args }) => {
  return homepage(args);
}

