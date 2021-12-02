import contentLayout from './contentLayout.html.twig';
import './contentLayout.scss';

export default {
  title: 'Layout/Content Layout',
  argTypes: {
    is_anchor: {
      table: { disable: true },
    },
  },
};

const Template = (args) => {
  return contentLayout(args);
};


export const ContentLayout = Template.bind({});

