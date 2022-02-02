import universalPageBasic from './universalPageBasic.html.twig';

export default {
  title: 'Pages/Universal Page/Basic',
  parameters: {
    controls: { disabled: true },
    layout: 'fullscreen',
  },
};

export const Basic = () => {
  return universalPageBasic();
};
