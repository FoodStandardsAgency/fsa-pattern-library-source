import searchBar from './searchBar.html.twig';
import searchBarJs from './searchBar';
import './searchBar.scss';

searchBarJs();

export default {
  title: 'Components/Search/Search Bar',
  argTypes: {
    searchText: {
      defaultValue: 'Search the food standards agency',
    },
  },
  parameters: {
    controls: {
      disabled: true,
    }
  }
};

const Template = ({label, ...args}) => {
  return searchBar(args);
}

export const SearchBar = Template.bind({});
SearchBar.args = {
  searchLink: '/search',
  searchText: 'Search Food Standards Agency',
}
