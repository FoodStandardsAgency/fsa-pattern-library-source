import error404 from './error404.html.twig';

import { social_svgs } from '../../components/svg-icons';

export default {
  title: 'Pages/Error/Error 404',
  parameters: {
    controls: { disabled: true },
    layout: 'fullscreen',
  },
};

const Template404 = (args) => {
  return error404(args);
}


export const Error404 =  Template404.bind({});
Error404.args = {
  facebook: social_svgs.facebook,
  twitter: social_svgs.twitter,
  linkedin: social_svgs.linkedin,
  youtube: social_svgs.youtube,
  instagram: social_svgs.instagram,
  blog: social_svgs.blog,
}
