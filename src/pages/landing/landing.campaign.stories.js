import landingCampaign from './landingCampaign.html.twig';
import { social_svgs } from '@components/components/svg-icons';
import { svgs } from '@components/components/svg-icons';
import { navigation } from '@components/components/default-content';

export default {
  title: 'Pages/Landing/Campaign',
  parameters: {
    controls: {
      disable: true,
    },
    layout: 'fullscreen',
  },
};

const Template = (args) => {
  return landingCampaign(args);
};

export const Campaign = Template.bind({});
Campaign.args = {
  navigation_content: navigation,
  svg: {
    import: svgs.import,
    farming: svgs.farming,
    regulated: svgs.regulated,
    fish: svgs.fish,
    meat: svgs.meat,
    wine: svgs.wine,
  },
  social_svg: {
    facebook: social_svgs.facebook,
    twitter: social_svgs.twitter,
    linkedin: social_svgs.linkedin,
    youtube: social_svgs.youtube,
    instagram: social_svgs.instagram,
    blog: social_svgs.blog,
  },
};
