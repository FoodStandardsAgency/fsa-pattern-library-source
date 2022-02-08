import header from './header.html.twig';
import './header.scss';

export default {
  title: 'Components/General/Header',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => header(args);

export const English = Template.bind({});
English.args = {
  english: true,
  english_link: '#',
  english_label: 'English',
  welsh_link: '#',
  welsh_label: 'Cymraeg',
  logo_link: '#',
  logo_label: 'Food Standards Agency - Frontpage',
  contact_link: '#',
  contact_label: 'Contact',
  report_link: '#',
  report_label: 'Report',
  ratings_link: '#',
  ratings_label: 'Food hygiene ratings',
  search_label: 'Search Food Standards Agency',
  search_link: '#',
  search_bar_visible: true,
  menu_label: 'menu',
  navigation: {
    id: 'navigation',
    label: 'Main navigation',
    home_link: '#',
    home_label: 'Home',
    links: [
      {
        link: {
          href:'#',
          label: 'News and alerts',
          active: 'false',
        },
        submenu: [
          {
            title: 'Latest updates',
            read_more_link: '#',
            read_more_label: 'See more Latest Updates',
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
          href:'#',
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
          href:'#',
          label: 'Business Guidance',
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
          href:'#',
          label: 'About us',
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
    ],
  }
};

export const WithTemporaryMessage = Template.bind({});
WithTemporaryMessage.args = {
  english: true,
  english_link: '#',
  english_label: 'English',
  welsh_link: '#',
  welsh_label: 'Cymraeg',
  logo_link: '#',
  logo_label: 'Food Standards Agency - Frontpage',
  contact_link: '#',
  contact_label: 'Contact',
  report_link: '#',
  report_label: 'Report',
  ratings_link: '#',
  ratings_label: 'Food hygiene ratings',
  search_label: 'Search Food Standards Agency',
  search_link: '#',
  search_bar_visible: true,
  menu_label: 'menu',
  navigation: {
    id: 'navigation',
    label: 'Main navigation',
    home_link: '#',
    home_label: 'Home',
    links: [
      {
        link: {
          href:'#',
          label: 'News and alerts',
          active: 'false',
        },
        submenu: [
          {
            title: 'Latest updates',
            read_more_link: '#',
            read_more_label: 'See more Latest Updates',
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
          href:'#',
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
          href:'#',
          label: 'Business Guidance',
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
          href:'#',
          label: 'About us',
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
    ],
  },
  temporary_message: {
    message: '<p><a href="#" class="external-link">Coronavirus (COVID 19):</a> Guidance and support</p>',
    level: 'low',
  }
};

export const Welsh = Template.bind({});
Welsh.args = {
  english: false,
  english_link: '#',
  english_label: 'English',
  welsh_link: '#',
  welsh_label: 'Cymraeg',
  logo_link: '#',
  logo_label: 'Food Standards Agency - Frontpage',
  contact_link: '#',
  contact_label: 'Cysylltu',
  report_link: '#',
  report_label: 'Adroddiad',
  ratings_link: '#',
  ratings_label: 'Sgoriau Hylendid Bwyd',
  search_label: 'Chwilio Asiantaeth Safonau Bwyd...',
  search_link: '#',
  search_bar_visible: true,
  menu_label: 'menu',
  navigation: {
    id: 'navigation',
    label: 'Main navigation',
    home_link: '#',
    home_label: 'Home',
    links: [
      {
        link: {
          href:'#',
          label: 'News and alerts',
          active: 'false',
        },
        submenu: [
          {
            title: 'Latest updates',
            read_more_link: '#',
            read_more_label: 'See more Latest Updates',
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
          href:'#',
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
          href:'#',
          label: 'Business Guidance',
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
          href:'#',
          label: 'About us',
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
    ],
  }
};
