import subscription from './subscription.html.twig';

export default {
  title: 'Pages/Subscription',
  parameters: {
    controls: { disabled: true },
    layout: 'fullscreen',
  },
};

export const Subscription = () => {
  return subscription();
};
