import errorResponse from './errorResponse.html.twig';
import './errorResponse.js';
import './errorResponse.scss';

export default {
  title: 'Components/General/Error Response',
};

const Template = (args) => {
  return errorResponse(args);
};

export const Error403 = Template.bind({});
Error403.args = {
  error: '403',
  content: '',
};

export const Error403WithArchive = Template.bind({});
Error403WithArchive.args = {
  error: '403',
  content: '',
};

export const Error404 = Template.bind({});
Error404.args = {
  error: '404',
  content: '',
};
