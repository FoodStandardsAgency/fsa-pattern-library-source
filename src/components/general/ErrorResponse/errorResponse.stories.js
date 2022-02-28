import errorResponse from './errorResponse.html.twig';
import './errorResponse.js';
import './errorResponse.scss';
import nationalArchiveLink from '@components/components/general/NationalArchiveLink/nationalArchiveLink.html.twig';

export default {
  title: 'Components/General/Error Response',
};

const Template = (args) => {
  return errorResponse(args);
};

export const Error403 = Template.bind({});
Error403.args = {
  error: '403',
  content:
    '<h1>Access denied</h1>\n' +
    '<p>Access has been denied. Please check the URL or go to the <a href="#">homepage.</a></p>',
};

export const Error403WithArchive = Template.bind({});
Error403WithArchive.args = {
  error: '403',
  content:
    '<h1>Access denied</h1>\n' +
    '<p>The page you were looking for has been moved or does not exist.</p>\n' +
    nationalArchiveLink({
      link: '#',
      link_label:
        'This page has been archived by The National Archives and is available through the UK Government Web Archive. (Opens in a new window)',
    }) +
    '<p>Or use our search or browser from the <a href="#">homepage</a> to find the information you need.</p>',
};

export const Error404 = Template.bind({});
Error404.args = {
  error: '404',
  content:
    '<h1>Page not found</h1>\n' +
    '<p>The page you were looking for has been moved or does not exist.</p>\n' +
    '<p>Please go to the <a href="#">homepage</a> or use our search to find the information you need.</p>',
};
