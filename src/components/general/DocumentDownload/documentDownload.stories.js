import documentDownload from './documentDownload.html.twig';
import './documentDownload.scss';

export default {
  title: 'Components/General/Document Download',
};

const Template = (args) => documentDownload(args);

export const WithoutRegion = Template.bind({});
WithoutRegion.args = {
  format: 'word',
  link: '#',
  view: 'View',
  name: 'Step by step guide for meat approvals application',
  as: 'as',
  new_window: 'Open in a new window',
  size: '559.42 KB',
};

export const WithRegion = Template.bind({});
WithRegion.args = {
  ...WithoutRegion.args,
  region: ['England'],
  format: 'pdf',
};
