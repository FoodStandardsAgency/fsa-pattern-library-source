import navigation from './navigation.html.twig';
import './navigation.scss';

export default {
  title: 'Components/General/Navigation',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => {
  return navigation(args);
};

export const Navigation = Template.bind({});
Navigation.args = {
  id: 'navigation',
  label: 'Main navigation',
  home_link: '#',
  home_label: 'Home',
  links: [
    {
      link: {
        href: '#',
        label: 'News and alerts',
        active: 'false',
      },
      submenu: [
        {
          title: 'Latest updates',
          read_more_link: '#',
          read_more_label: 'More in Latest Updates',
          links: [
            {
              link: {
                type: 'link',
                href: '#',
                label: 'News',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Food alerts',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Subscribe to food and alerts',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'FSA blog',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'RSS feeds',
                active: 'false',
              },
            },
          ],
        },
        {
          title: 'Open policy making',
          links: [
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Consultations',
                active: 'false',
              },
            },
          ],
        },
      ],
    },
    {
      link: {
        href: '#',
        label: 'Food safety and Hygiene',
        active: 'true',
      },
      submenu: [
        {
          title: 'At home',
          links: [
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Cooking your food',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Chilling',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Cleaning',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Cross-contamination',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Home food fact checker',
                active: 'false',
              },
            },
          ],
        },
        {
          title: 'Buying and eating food',
          links: [
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Allergy and intolerance',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Report a food allergic reaction',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Best before and use-by dates',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Food hygience rating',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Food safety for comminity cooking and food banks',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Food crime',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Advice for young adults with a food allergy',
                active: 'false',
              },
            },
          ],
        },
        {
          title: 'Food poisoning',
          links: [
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Campylobacter',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Salmonella',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Hepatits E virus',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'E. Coli',
                active: 'false',
              },
            },
          ],
        },
        {
          title: 'Food safety advice',
          links: [
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Cannabidiol (CBD)',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Norovirus',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Raw drinking milk',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Acrylamide',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Radioactivity in food',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Additives',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Arsenic in rice',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Burgers',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Fake alcohol',
                active: 'false',
              },
            },
          ],
        },
        {
          title: 'Nutrition (Northern Ireland)',
          links: [
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Check the label',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'The Eatwell Guide',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Folic acid',
                active: 'false',
              },
            },
          ],
        },
      ],
    },
    {
      link: {
        href: '#',
        label: 'Business Guidance',
        active: 'true',
      },
      submenu: [
        {
          title: 'Starting a food business',
          links: [
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Registering a food business',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Setting up a food business',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Starting a food business from home',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Managing food safely',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Food safety for food delivery',
                active: 'false',
              },
            },
          ],
        },
        {
          title: 'Applying for authorisation or approval',
          links: [
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Apply for a regulated product authorisation',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Regulated products application guidance',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Applying for approval of a meat establishment',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Applying for approval of a food establishment',
                active: 'false',
              },
            },
          ],
        },
        {
          title: 'Running a business',
          links: [
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Allergen labelling changes for prepacked for direct sale (PPDS) food',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Reopening and adapting your food business during COVID-19',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Safer food, better business',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Allergen guidance',
                active: 'false',
              },
            },
          ],
        },
        {
          title: 'Industry-specific advice',
          links: [
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Placing a regulated product on the market',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'The UK has left the EU',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Cannabidiol (CBD) guidance',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Imports and exports',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Allergen labelling',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Precautionary allergen labelling',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Farming and animal feed',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Meat and slaughter',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Fish and shellfish',
                active: 'false',
              },
            },
          ],
        },
      ],
    },
    {
      link: {
        href: '#',
        label: 'About us',
        active: 'true',
      },
      submenu: [
        {
          title: 'Our FSA Board meetings',
          links: [
            {
              link: {
                type: 'link',
                href: '#',
                label: 'FSA Board Meetings',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Members of the FSA Board',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Code of conduct, standing orders, and terms of reference for the FSA Board',
                active: 'false',
              },
            },
          ],
        },
        {
          title: 'Science and research',
          links: [
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Our approach to science',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Research reports',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Areas of research interest',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Science committees',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Apply for research funding',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Framework for assessing third-party evidence',
                active: 'false',
              },
            },
          ],
        },
        {
          title: 'Our people',
          links: [
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Leadership team',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'National Food Crime Unit',
                active: 'false',
              },
            },
          ],
        },
        {
          title: 'Our committees',
          links: [
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Committees of FSA Board',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Northern Ireland Food Advisory Committee',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Welsh Food Advisory Committee',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Meat charging steering group',
                active: 'false',
              },
            },
          ],
        },
        {
          title: 'How we work',
          links: [
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Who we are',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Our strategy',
                active: 'false',
              },
            },
            {
              link: {
                type: 'link',
                href: '#',
                label: 'Engagement and consultations',
                active: 'false',
              },
            },
          ],
        },
      ],
    },
  ],
};
