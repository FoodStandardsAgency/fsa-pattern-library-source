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
