import header from './header.html.twig';
import './header.scss';
import headerJs from './header';

headerJs();

export default {
  title: 'Components/General/Header',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => header(args);

export const English = Template.bind({});
English.args = {
  english: true,
  english_link: '#',
  english_label: 'English',
  welsh_link: '#',
  welsh_label: 'Cymraeg',
  logo_link: '#',
  logo_label: 'Food Standards Agency - Frontpage',
  contact_link: '#',
  contact_label: 'Contact',
  report_link: '#',
  report_label: 'Report',
  ratings_link: '#',
  ratings_label: 'Food hygiene ratings',
  search_label: 'Search Food Standards Agency',
  search_bar_visible: true,
  menu_label: 'menu',
};

export const Welsh = Template.bind({});
Welsh.args = {
  english: false,
  english_link: '#',
  english_label: 'English',
  welsh_link: '#',
  welsh_label: 'Cymraeg',
  logo_link: '#',
  logo_label: 'Food Standards Agency - Frontpage',
  contact_link: '#',
  contact_label: 'Cysylltu',
  report_link: '#',
  report_label: 'adroddiad',
  ratings_link: '#',
  ratings_label: 'Sgoriau Hylendid Bwyd',
  search_label: 'Chwilio Asiantaeth Safonau Bwyd...',
  search_bar_visible: true,
  menu_label: 'menu',
};
