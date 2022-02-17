import ratingCta from './ratingCta.html.twig';
import './ratingCta.scss';

export default {
  title: 'Components/Search/Rating CTA',
};

const Template = (args) => ratingCta(args);

export const RatingCTA = Template.bind({});
RatingCTA.args = {
  title: 'Food hygiene ratings',
  description: 'You can search using the business name or address',
  url: 'https://www.food.gov.uk/news-alerts',
  button_label: 'Search Food hygiene ratings',
};
