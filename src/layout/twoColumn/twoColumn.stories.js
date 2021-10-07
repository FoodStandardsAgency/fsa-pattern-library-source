import twoColumn from './twoColumn.html.twig';
import './twoColumn.scss';

export default {
  title: 'Layout/Two Columns',
  argTypes: {
    is_anchor: {
      table: { disable: true },
    },
  },
};

const Template = (args) => {
  return twoColumn(args);
};


export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'All News and Alerts',
  url: 'https://www.food.gov.uk/news-alerts',
  is_anchor: true,
};

