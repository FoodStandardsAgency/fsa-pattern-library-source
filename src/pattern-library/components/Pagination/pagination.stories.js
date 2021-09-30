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

export const PaginationStart = Template.bind({});
PaginationStart.args = {
  paginationType: 'Search',
  totalPages: 9,
  currentPage: 1,
  maxPages: 4,
}

export const PaginationMid = Template.bind({});
PaginationMid.args = {
  paginationType: 'Search',
  totalPages: 16,
  currentPage: 6,
  maxPages: 4,
}

export const PaginationEnd = Template.bind({});
PaginationEnd.args = {
  paginationType: 'Search',
  totalPages: 9,
  currentPage: 9,
  maxPages: 4,
}
