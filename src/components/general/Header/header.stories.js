import header from './header.html.twig';
import './header.scss'

export default {
  title: 'Components/General/Header',
}

const Template = args => header(args);

export const Header = Template.bind({});
Header.args = {
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
  expanded: 'false',
}