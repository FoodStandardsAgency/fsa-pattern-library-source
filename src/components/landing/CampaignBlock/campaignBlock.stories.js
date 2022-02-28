import campaignBlock from './campaignBlock.html.twig';
import './campaignBlock.scss';

export default {
  title: 'Components/Landing/Campaign Block',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disabled: false,
    },
  },
};

const Template = (args) => {
  return campaignBlock(args);
};

export const CampaignBlock = Template.bind({});
CampaignBlock.args = {
  title: 'Food Standards Agency launches new campaign',
  description:
    'The campaign is designed to educate and motivate consumers to make healthier informed choices when food shopping by looking at nutritional labels',
  cta: {
    url: '#',
    label: 'Find out more',
  },
  image: {
    alt: 'Alt text',
    url: 'https://images.unsplash.com/photo-1589478489438-9a2091d9e2f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
  },
  has_hero: false,
};
