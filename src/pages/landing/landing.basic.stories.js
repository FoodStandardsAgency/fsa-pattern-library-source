import landingBasic from './landingBasic.html.twig';
import { navigation } from '@components/components/default-content';
import { social_svgs, svgs } from '@components/components/svg-icons';

export default {
  title: 'Pages/Landing/Basic',
  parameters: {
    controls: {
      disable: true,
    },
    layout: 'fullscreen',
  },
};

const Template = (args) => {
  return landingBasic(args);
};

export const Basic = Template.bind({});
Basic.args = {
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
