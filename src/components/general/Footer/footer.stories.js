import footer from './footer.html.twig';
import './footer.scss';

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
    { label: 'Facebook', external: true, href: '#', icon_type: 'facebook' },
    { label: 'Twitter', external: true, href: '#', icon_type: 'twitter' },
    { label: 'LinkedIn', external: true, href: '#', icon_type: 'linkedin' },
    { label: 'Youtube', external: true, href: '#', icon_type: 'youtube' },
    { label: 'Instagram', external: true, href: '#', icon_type: 'instagram' },
    { label: 'FSA blog', external: false, href: '#', icon_type: 'blog' },
  ],
};
