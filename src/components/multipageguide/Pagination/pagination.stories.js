import pagination from './pagination.html.twig';
import './pagination.scss';

export default {
  title: 'Components/Multipage Guide/Pagination',
};

const Template = (args) => pagination(args);

export const PaginationStart = Template.bind({});
PaginationStart.args = {
  next: {
    label: "Next",
    page_name: "2. Introduction"
  }
};

export const PaginationMid = Template.bind({});
PaginationMid.args = {
  previous: {
    label: "Previous",
    page_name: "1. Guidance summary"
  },
  next: {
    label: "Next",
    page_name: "3. Requirements and overview of cooking methods"
  }
};

export const PaginationEnd = Template.bind({});
PaginationEnd.args = {
  previous: {
    label: "Previous",
    page_name: "2. Introduction"
  }
};
