import search from './search.html.twig';

import { social_svgs } from '../../components/svg-icons';

export default {
  title: 'Pages/Search',
  parameters: {
    controls: {
      disable: true,
    },
    layout: 'fullscreen',
  },
};

const Template = (args) => {
  return search(args);
};

export const Search = Template.bind({});
Search.args = {
  social_media: 'Food Standards Agency on social media',
  social_links: [
    { label: 'Facebook', external: true, href: '#', svg: social_svgs.facebook },
    { label: 'Twitter', external: true, href: '#', svg: social_svgs.twitter },
    { label: 'LinkedIn', external: true, href: '#', svg: social_svgs.linkedin },
    { label: 'Youtube', external: true, href: '#', svg: social_svgs.youtube },
    { label: 'Instagram', external: true, href: '#', svg: social_svgs.instagram },
    { label: 'FSA blog', external: false, href: '#', svg: social_svgs.blog },
  ],
};
