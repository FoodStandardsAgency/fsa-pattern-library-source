import nationalArchiveLink from './nationalArchiveLink.html.twig';
import './nationalArchiveLink.js';
import './nationalArchiveLink.scss';

export default {
  title: 'Components/General/National Archive Link',
};

const Template = (args) => {
  return nationalArchiveLink(args);
};

export const NationalArchiveLink = Template.bind({});
NationalArchiveLink.args = {
  link: '#',
  link_label: 'National Archive',
};

export const NationalArchiveLinkWithLabel = Template.bind({});
NationalArchiveLinkWithLabel.args = {
  label: 'Previous news and alerts',
  link: '#',
  link_label: 'National Archive',
};

export const NationalArchiveLeftAligned = Template.bind({});
NationalArchiveLeftAligned.args = {
  alignment: 'left',
  label: 'Previous news and alerts',
  link: '#',
  link_label: 'National Archive',
};

export const NationalArchiveLinkRightAligned = Template.bind({});
NationalArchiveLinkRightAligned.args = {
  alignment: 'right',
  label: 'Previous news and alerts',
  link: '#',
  link_label: 'National Archive',
};
