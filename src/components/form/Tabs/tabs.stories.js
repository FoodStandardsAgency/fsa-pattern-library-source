import tabs from './tabs.html.twig';
import './tabs.js';

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
      is_active: true,
      name: 'Food and allergy',
      link: '#',
    },
    {
      is_active: false,
      name: 'News and consultations',
      link: '#',
    },
    {
      is_active: false,
      name: 'Delivery options',
      link: '#',
    },
    {
      is_active: false,
      name: 'Account settings',
      link: '#',
    },
  ],
};

