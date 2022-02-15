import multipageguide from './multipageguide.html.twig';

export default {
  title: 'Pages/Multipage Guide',
  parameters: {
    controls: { disabled: true },
    layout: 'fullscreen',
  },
};

export const MultipageGuide = () => {
  return multipageguide();
};