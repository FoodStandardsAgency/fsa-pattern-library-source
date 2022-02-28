import myhaccpPage from './myhaccpPage.html.twig';

export default {
  title: 'Pages/MyHaccp Page',
  parameters: {
    controls: { disabled: true },
    layout: 'fullscreen',
  },
};

export const MyHaccpPage = () => {
  return myhaccpPage();
};
