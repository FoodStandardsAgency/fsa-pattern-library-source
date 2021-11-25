import articleTwoColumn from './articleTwoColumn.html.twig';
import './articleTwoColumn.scss';

export default {
  title: 'Layout/Article Two Columns',
  argTypes: {
    is_anchor: {
      table: { disable: true },
    },
  },
};

const Template = (args) => {
  return articleTwoColumn(args);
};


export const ArticleTwoColumns = Template.bind({});

