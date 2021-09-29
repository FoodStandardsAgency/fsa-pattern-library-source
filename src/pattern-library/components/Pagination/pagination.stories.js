import pagination from './pagination.html.twig';
import './pagination.scss';

export default {
  title: 'Pattern Library/Components/Pagination',
  argTypes: {
    paginationType: {
      defaultValue: 'Search',
    },
  },
};

const Template = ({ label, ...args }) => {
  return pagination(args);
}

export const Pagination = Template.bind({});
Pagination.args = {
  paginationType: 'Search',
  totalPages: 9,
  currentPage: 1,
  maxPages: 4,
}
