import tabs from './tabs.html.twig';
import './tab.js';

export default {
    title: 'Components/Form/Tabs',
    argTypes: {
      type: {
        defaultValue: 'Account details',
      },
    },
  };

const Template = (args) => {
  return tabs(args);
};

export const Tabs = Template.bind({});
Tabs.args = {
  type: 'Account details',
  tabs: [
    {
      isActive: true,
      name: 'Food and allergy',
      link: '#',
    },
    {
      isActive: false,
      name: 'News and consultations',
      link: '#',
    },
    {
      isActive: false,
      name: 'Delivery options',
      link: '#',
    },
    {
      isActive: false,
      name: 'Account settings',
      link: '#',
    },
  ],
};

