import link from './link.html.twig';
import './link.js';
import './link.scss';

export default {
  title: 'Components/General/Link',
  argTypes: {
    type: {
      defaultValue: 'Link',
    },
  },
};

const Template = (args) => {
  return link(args);
};

export const RegularLink = Template.bind({});
RegularLink.args = {
  link_url: '#',
  link_text: 'Regular link',
};
