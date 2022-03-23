import helpSecondaryMenu from './helpSecondaryMenu.html.twig';
import './helpSecondaryMenu.scss';

export default {
  title: 'Components/Contact/Secondary Menu',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => helpSecondaryMenu(args);

export const ForConsumers = Template.bind({});
ForConsumers.args = {
  heading: 'Help/contact menu',
  links: [
    {
      link: {
        href: '#',
        label: 'For consumers',
        active: true,
      },
    },
    {
      link: {
        href: '#',
        label: 'For businesses',
        active: false,
      },
    },
  ],
};

export const ForBusinesses = Template.bind({});
ForBusinesses.args = {
  heading: 'Help/contact menu',
  links: [
    {
      link: {
        href: '#',
        label: 'For consumers',
        active: false,
      },
    },
    {
      link: {
        href: '#',
        label: 'For businesses',
        active: true,
      },
    },
  ],
};
