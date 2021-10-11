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
  title: 'There are no matching results',
  removeFiltersText: 'Try a new key word or',
  removeFiltersLinkText: 'remove all filters',
  foodHygieneRatingText: 'Were you looking for',
  foodHygieneRatingLinkText: 'Food Hygiene Ratings',
  removeFiltersLink: 'http://example.com/removeFilters',
  foodHygieneRatingLink: 'http://example.com/foodHygiene'
};
