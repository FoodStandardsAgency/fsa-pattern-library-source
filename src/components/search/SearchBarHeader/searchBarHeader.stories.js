import searchBarHeader from './searchBarHeader.html.twig';
import './searchBarHeader.scss';

export default {
  title: 'Components/Search/Search Bar Header',
  argTypes: {
    header_text: {
      defaultValue: 'Search',
    },
  },
  layout: 'fullscreen',
};

const Template = ({ ...args }) => {
  return searchBarHeader(args);
};

export const SearchBarHeader = Template.bind({});
SearchBarHeader.args = {
  header_text: 'Search',
  search_link: '#',
  search_text: 'Search Food Standards Agency',
  search_value: '',
};
