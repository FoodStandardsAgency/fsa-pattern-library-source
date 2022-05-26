import fhrsCompany from './fhrsCompany.html.twig';
import fhrsSearch from './fhrsSearch.html.twig';
import fhrsHome from './fhrsHome.html.twig';
import fhrsCompanyDigitalBadge from './fhrsCompanyDigitalBadge.html.twig';
import fhrsApiPage from './fhrsApiPage.html.twig';
import { navigation } from '@components/components/default-content';
import { social_svgs, svgs } from '@components/components/svg-icons';

export default {
  title: 'Pages/FHRS',
  parameters: {
    controls: {
      disable: true,
    },
    layout: 'fullscreen',
  },
};

export const FHRSHome = () => {
  return fhrsHome();
};

export const FHRSCompany = () => {
  return fhrsCompany();
};

export const FHRSSearch = () => {
  return fhrsSearch();
};

export const FHRSCompanyDigitalBadge = () => {
  return fhrsCompanyDigitalBadge();
};

const Template = (args) => {
  return fhrsApiPage(args);
};

export const FhrsApiPage = Template.bind({});
FhrsApiPage.storyName = 'FHRS API';
FhrsApiPage.args = {
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
