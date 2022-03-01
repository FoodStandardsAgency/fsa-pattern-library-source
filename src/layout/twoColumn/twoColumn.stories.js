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

export const TwoColumns = Template.bind({});
