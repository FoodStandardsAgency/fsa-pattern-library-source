import error403 from './error403.html.twig';
import error403WithArchive from './error403WithArchive.html.twig';

import { social_svgs } from '../../components/svg-icons';
import { navigation } from '@components/components/default-content';

export default {
  title: 'Pages/Error/Error 403',
  parameters: {
    controls: { disable: true },
    layout: 'fullscreen',
  },
};

const Template403 = (args) => {
  return error403(args);
};

const Template403WithArchive = (args) => {
  return error403WithArchive(args);
};

export const Error403 = Template403.bind({});
Error403.args = {
  navigation_content: navigation,
  facebook: social_svgs.facebook,
  twitter: social_svgs.twitter,
  linkedin: social_svgs.linkedin,
  youtube: social_svgs.youtube,
  instagram: social_svgs.instagram,
  blog: social_svgs.blog,
};

export const Error403WithArchive = Template403WithArchive.bind({});
Error403WithArchive.args = {
  navigation_content: navigation,
  facebook: social_svgs.facebook,
  twitter: social_svgs.twitter,
  linkedin: social_svgs.linkedin,
  youtube: social_svgs.youtube,
  instagram: social_svgs.instagram,
  blog: social_svgs.blog,
};
