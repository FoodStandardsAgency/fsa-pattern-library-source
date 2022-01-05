import helpSecondaryMenu from './helpSecondaryMenu.html.twig';
import './helpSecondaryMenu.scss';

export default {
  title: 'Components/Help/Secondary Menu',
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
      submenu: {
        links: [
          {
            link: {
              href: '#',
              label: 'Report a food problem',
              active: true,
            },
          },
          {
            link: {
              href: '#',
              label: 'Give us Feedback',
              active: false,
            },
          },
          {
            link: {
              href: '#',
              label: 'Find contact details',
              active: false,
            },
          },
        ],
      },
    },
    {
      link: {
        href: '#',
        label: 'For businesses',
        active: false,
      },
      submenu: {
        links: [
          {
            link: {
              href: '#',
              label: 'Report a food concern',
              active: false,
            },
          },
          {
            link: {
              href: '#',
              label: 'Find business services',
              active: false,
            },
          },
          {
            link: {
              href: '#',
              label: 'Give us feedback',
              active: false,
            },
          },
          {
            link: {
              href: '#',
              label: 'Find contact details',
              active: false,
            },
          },
        ],
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
      submenu: {
        links: [
          {
            link: {
              href: '#',
              label: 'Report a food problem',
              active: false,
            },
          },
          {
            link: {
              href: '#',
              label: 'Give us Feedback',
              active: false,
            },
          },
          {
            link: {
              href: '#',
              label: 'Find contact details',
              active: false,
            },
          },
        ],
      },
    },
    {
      link: {
        href: '#',
        label: 'For businesses',
        active: true,
      },
      submenu: {
        links: [
          {
            link: {
              href: '#',
              label: 'Report a food concern',
              active: true,
            },
          },
          {
            link: {
              href: '#',
              label: 'Find business services',
              active: false,
            },
          },
          {
            link: {
              href: '#',
              label: 'Give us feedback',
              active: false,
            },
          },
          {
            link: {
              href: '#',
              label: 'Find contact details',
              active: false,
            },
          },
        ],
      },
    },
  ],
};
