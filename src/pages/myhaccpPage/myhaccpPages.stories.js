import guidancePage from './guidancePage.twig';

export default {
  title: 'Pages/MyHACCP',
  parameters: {
    controls: { disable: true },
    layout: 'fullscreen',
  },
};

export const GuidancePage = () => {
  return guidancePage();
};
