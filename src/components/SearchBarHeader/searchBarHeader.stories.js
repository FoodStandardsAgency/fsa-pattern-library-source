import searchBarHeader from './searchBarHeader.html.twig';
import './searchBarHeader.scss';

export default {
  title: 'Components/Search Bar Header',
  argTypes: {
    headerText: {
      defaultValue: 'Search',
    },
  },
  layout: 'fullscreen',
};

const Template = ({ label, ...args }) => {
  return searchBarHeader(args);
}

export const SearchBarHeader = Template.bind({});
SearchBarHeader.args = {
  headerText: 'Search',
  searchLink: '/search',
  searchText: 'Search Food Standards Agency',
  searchValue: '',
}
