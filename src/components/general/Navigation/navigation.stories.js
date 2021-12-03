import navigation from './navigation.html.twig';
import './navigation.scss';

export default {
  title: 'Components/General/Navigation',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    type: {
      defaultValue: 'main',
    },
  },
};

const Template = (args) => {
  return navigation(args);
};

export const Navigation = Template.bind({});
Navigation.args = {
  id: 'navigation',
  label: 'Main navigation',
  homeLink: '#',
  homeLabel: 'Home',
  links: [
    {
      link: {
        type: 'link',
        href: '#',
        label: 'Single link example',
        active: 'false',
      },
    },
    {
      link: {
        href:'#',
        label: 'News and alerts',
        active: 'true',
      },
      submenu: [
        {
        title: 'Latest updates',
        readMoreLink: '#',
        readMoreLabel: 'See more Latest Updates',
        links: [
            {
            link: {
              type: 'link',
              href: '#',
              label: 'News',
              active: 'false',
            },
            link: {
              type: 'link',
              href: '#',
              label: 'Food alerts',
              active: 'true',
            },
          },
        ],
      },
        {
          title: 'Latest updates',
          links: [
            {
              link: {
                type: 'link',
                href: '#',
                label: 'News',
                active: 'false',
              },
              link: {
                type: 'link',
                href: '#',
                label: 'Food alerts',
                active: 'true',
              },
            },
          ],
        },
      ],
    },
    {
      link: {
        href:'#',
        label: 'News and alerts',
        active: 'true',
      },
      submenu: [
        {
          title: 'Latest updates',
          links: [
            {
              link: {
                type: 'link',
                href: '#',
                label: 'News',
                active: 'false',
              },
              link: {
                type: 'link',
                href: '#',
                label: 'Food alerts',
                active: 'true',
              },
            },
          ],
        },
        {
          title: 'Latest updates',
          links: [
            {
              link: {
                type: 'link',
                href: '#',
                label: 'News',
                active: 'false',
              },
              link: {
                type: 'link',
                href: '#',
                label: 'Food alerts',
                active: 'true',
              },
            },
          ],
        },
      ],
    },
  ],
};
