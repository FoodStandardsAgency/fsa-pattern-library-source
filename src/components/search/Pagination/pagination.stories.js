import pagination from './pagination.html.twig';
import './pagination.scss';

export default {
  title: 'Components/Search/Pagination',
  argTypes: {
    pagination_type: {
      defaultValue: 'Search',
    },
  },
};

const Template = ({ label, ...args }) => {
  return pagination(args);
}

export const PaginationStart = Template.bind({});
PaginationStart.args = {
  pagination_type: 'Search',
  total_pages: 9,
  current_page: 1,
  max_visible_pages: 4,
  first_label: "First",
  previous_label: "Previous",
  next_label: "Next",
  last_label: "Last",
}

export const PaginationMid = Template.bind({});
PaginationMid.args = {
  pagination_type: 'Search',
  total_pages: 16,
  current_page: 6,
  max_visible_pages: 4,
  first_label: "First",
  previous_label: "Previous",
  next_label: "Next",
  last_label: "Last",
}

export const PaginationEnd = Template.bind({});
PaginationEnd.args = {
  pagination_type: 'Search',
  total_pages: 9,
  current_page: 9,
  max_visible_pages: 4,
  first_label: "First",
  previous_label: "Previous",
  next_label: "Next",
  last_label: "Last",
}
