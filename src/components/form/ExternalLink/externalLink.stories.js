import externalLink from './externalLink.html.twig';
import './externalLink.js';

export default {
    title: 'Components/Form/External Link',
    argTypes: {
      type: {
        defaultValue: 'External link',
      },
    },
  };

const Template = (args) => {
  return externalLink(args);
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  externalLinkUrl: '#',
  externalLink: 'Privacy policy',
};
