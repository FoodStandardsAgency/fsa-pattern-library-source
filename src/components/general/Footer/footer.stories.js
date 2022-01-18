import footer from './footer.html.twig';
import './footer.scss';

import { social_svgs } from '../../svg-icons';

export default {
  title: 'Components/General/Footer',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Footer = (args) => footer(args);

Footer.args = {
  footer_links: 'Footer links',
  new_window: 'Open in a new window',
  menu_links: [
    {
      link: { label: 'Copyright', href: '#', external: false },
    },
    {
      link: { label: 'Accessibility', href: '#', external: false },
    },
    {
      link: { label: 'Freedom of information', href: '#', external: false },
    },
    {
      link: { label: 'Terms and conditions', href: '#', external: false },
    },
    {
      link: { label: 'Privacy', href: '#', external: false },
    },
    {
      link: {
        label: 'Personal information charter',
        href: '#',
        external: false,
      },
    },
    {
      link: { label: 'Feedback and complaints', href: '#', external: false },
    },
    {
      link: { label: 'Cookies', href: '#', external: false },
    },
    {
      link: { label: 'Data', href: '#', external: false },
    },
    {
      link: { label: 'GOV.UK', href: '#', external: true },
    },
  ],
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
