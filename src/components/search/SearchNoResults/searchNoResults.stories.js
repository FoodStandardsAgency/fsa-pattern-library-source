import searchNoResults from './searchNoResults.html.twig';
import './searchNoResults.scss';

export default {
  title: 'Components/Search/Search No Results',
  parameters: {
    controls: {
      disable: false,
    },
  },
};

const Template = (args) => {
  return searchNoResults(args);
};

export const NoResults = Template.bind({});
NoResults.args = {
  title: 'There are no matching results.',
  filters_selected: false,
  no_results_text:
    'Check your search for any spelling mistakes or typos, or try a different search term',
  food_hygiene_rating_text: 'Were you looking for',
  food_hygiene_rating_link_text: 'Food Hygiene Ratings',
  food_hygiene_rating_link: '#',
};

export const NoResultsWithFilters = Template.bind({});
NoResultsWithFilters.args = {
  title: 'There are no matching results.',
  filters_selected: true,
  no_results_text:
    'Check your search for any spelling mistakes or typos, or try a different search term. You could also',
  remove_filters_link_text: 'remove all selected filters',
  food_hygiene_rating_text: 'Were you looking for',
  food_hygiene_rating_link_text: 'Food Hygiene Ratings',
  remove_filters_link: '#',
  food_hygiene_rating_link: '#',
};
