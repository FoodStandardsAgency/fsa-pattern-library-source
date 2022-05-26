import link from './link.html.twig';
import './link.js';
import './link.scss';

export default {
  title: 'Components/General/Link',
};

const Template = (args) => {
  return link(args);
};

export const Link = Template.bind({});
Link.args = {
  link_url: '#',
  link_text: 'Regular link',
};

export const OpenInNewTab = Template.bind({});
OpenInNewTab.args = {
  link_url: '#',
  link_text: 'Opens in new tab',
  open_in_new_tab: true,
  opens_in_new_tab_label: '(Opens in a new window)',
};
