import layout from './layout.html.twig';
import './layout.scss';

export default {
  title: 'Pattern Library/Components/Layout',
  argTypes: {
    is_anchor: {
      table: { disable: true },
    },
  },
};

const Template = (args) => {
  return layout(args);
};


export const TwoColumn = Template.bind({});
TwoColumn.args = {
  primary: true,
  label: 'All News and Alerts',
  url: 'https://www.food.gov.uk/news-alerts',
  is_anchor: true,
};

