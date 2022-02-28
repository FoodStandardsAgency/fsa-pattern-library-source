import searchBar from './searchBar.html.twig';
import searchBarJs from './searchBar';
import './searchBar.scss';

searchBarJs();

export default {
  title: 'Components/Search/Search Bar',
  argTypes: {
    search_text: {
      defaultValue: 'Search the food standards agency',
    },
  },
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

const Template = ({ ...args }) => {
  return searchBar(args);
};

export const SearchBar = Template.bind({});
SearchBar.args = {
  search_link: '#',
  search_text: 'Search Food Standards Agency',
};
