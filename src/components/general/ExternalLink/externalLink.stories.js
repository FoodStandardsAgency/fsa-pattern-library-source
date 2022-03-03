import externalLink from './externalLink.html.twig';
import './externalLink.js';

export default {
  title: 'Components/General/External Link',
};

const Template = (args) => {
  return externalLink(args);
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  external_link_url: '#',
  external_link: 'Privacy policy',
};
