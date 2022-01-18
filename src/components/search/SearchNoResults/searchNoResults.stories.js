import searchNoResults from './searchNoResults.html.twig';
import './searchNoResults.scss';

export default {
  title: 'Components/Search/Search No Results',
  parameters: {
    controls: {
      disabled: false,
    } 
  }
};

const Template = (args) => {
  return searchNoResults(args);
}


export const SearchNoResults = Template.bind({});
SearchNoResults.args = {
  title: 'There are no matching results.',
  remove_filters_text: 'Try a new key word or',
  remove_filters_link_text: 'remove all filters',
  food_hygiene_rating_text: 'Were you looking for',
  food_hygiene_rating_link_text: 'Food Hygiene Ratings',
  remove_filters_link: 'http://example.com/removeFilters',
  food_hygiene_rating_link: 'http://example.com/foodHygiene'
};
