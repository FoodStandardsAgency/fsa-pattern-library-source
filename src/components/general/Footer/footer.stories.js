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
      title: 'Copyright',
      link: '#',
      external: false,
    },
    {
      title: 'Accessibility',
      link: '#',
      external: false,
    },
    {
      title: 'Freedom of information',
      link: '#',
      external: false,
    },
    {
      title: 'Terms and conditions',
      link: '#',
      external: false,
    },
    {
      title: 'Privacy',
      link: '#',
      external: false,
    },
    {
      title: 'Personal information charter',
      link: '#',
      external: false,
    },
    {
      title: 'Feedback and complaints',
      link: '#',
      external: false,
    },
    {
      title: 'Cookies',
      link: '#',
      external: false,
    },
    {
      title: 'Data',
      link: '#',
      external: false,
    },
    {
      title: 'GOV.UK',
      link: '#',
      external: true,
    },
  ],
  social_media: 'Food Standards Agency on social media',
  social_links: [
    { label: 'Facebook', external: true, link: '#', icon_type: 'facebook' },
    { label: 'Twitter', external: true, link: '#', icon_type: 'twitter' },
    { label: 'LinkedIn', external: true, link: '#', icon_type: 'linkedin' },
    { label: 'Youtube', external: true, link: '#', icon_type: 'youtube' },
    { label: 'Instagram', external: true, link: '#', icon_type: 'instagram' },
    { label: 'FSA blog', external: false, link: '#', icon_type: 'blog' },
  ],
};
