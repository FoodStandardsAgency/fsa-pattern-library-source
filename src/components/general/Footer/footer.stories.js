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
      link: { title: 'Copyright', link: '#', external: false },
    },
    {
      link: { title: 'Accessibility', link: '#', external: false },
    },
    {
      link: { title: 'Freedom of information', link: '#', external: false },
    },
    {
      link: { title: 'Terms and conditions', link: '#', external: false },
    },
    {
      link: { title: 'Privacy', link: '#', external: false },
    },
    {
      link: {
        title: 'Personal information charter',
        link: '#',
        external: false,
      },
    },
    {
      link: { title: 'Feedback and complaints', link: '#', external: false },
    },
    {
      link: { title: 'Cookies', link: '#', external: false },
    },
    {
      link: { title: 'Data', link: '#', external: false },
    },
    {
      link: { title: 'GOV.UK', link: '#', external: true },
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
