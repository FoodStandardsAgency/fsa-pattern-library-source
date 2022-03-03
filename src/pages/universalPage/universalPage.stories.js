import universalPage from './universalPage.html.twig';

export default {
  title: 'Pages/Universal Page',
  parameters: {
    controls: { disable: true },
    layout: 'fullscreen',
  },
};

export const UniversalPage = () => {
  return universalPage();
};
