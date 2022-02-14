import landingCampaign from './landingCampaign.html.twig';

export default {
  title: 'Pages/Landing/Campaign',
  parameters: {
    controls: {
      disabled: true,
    },
    layout: 'fullscreen',
  }
};

export const Campaign = ({ label, ...args }) => {
  return landingCampaign(args);
}

