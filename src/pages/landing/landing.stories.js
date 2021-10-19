import landing from './landing.html.twig';

export default {
  title: 'Pages/Landing',
  parameters: {
    controls: { disabled: true },
    layout: 'fullscreen',
  },
};

export const Landing = () => {
  return landing();
};
