import breadcrumb from './breadcrumb.html.twig';
import './breadcrumb.scss';
import breadcrumbJs from './breadcrumb.js';

breadcrumbJs();


export default {
  title: 'Components/General/Breadcrumb',
  parameters: {
    controls: {
      disabled: true,
    }
  }
};

const Template = (args) => { 
  return breadcrumb(args);
}

export const Breadcrumb = Template.bind({});
Breadcrumb.args = {
  items: [
    {
      'label': 'Home',
      'url': '/'
    },
    {
      'label': 'Business guidance',
      'url': null
    },
    {
      'label': 'Running a business',
      'url': '/running-a-business'
    },
    {
      'label': 'Hazard Analysis and Critical Control Point',
      'url': null
    },
  ],
  expanded: false
};

export const BreadcrumbExpanded = Template.bind({});
BreadcrumbExpanded.args = {
  items: [
    {
      'label': 'Home',
      'url': '/'
    },
    {
      'label': 'Business guidance',
      'url': null
    },
    {
      'label': 'Running a business',
      'url': '/running-a-business'
    },
    {
      'label': 'Hazard Analysis and Critical Control Point',
      'url': null
    },
  ],
  expanded: true
};

export const BreadcrumbLoggedOut = Template.bind({});
BreadcrumbLoggedOut.args = {
  items: [
    {
      'label': 'Home',
      'url': '/'
    },
    {
      'label': 'News & Alerts',
      'url': '/news-alerts'
    },
    {
      'label': 'Subscribe to news & alerts',
      'url': null
    },
  ],
  expanded: false,
  subscription: {
    isLoggedIn: false,
    loggedOutLabel: 'Already have a subscription?',
    loggedOutButtonLabel: 'Sign in',
    loggedOutButtonLink: '#',
  },
};

export const BreadcrumbLoggedIn = Template.bind({});
BreadcrumbLoggedIn.args = {
  items: [
    {
      'label': 'Home',
      'url': '/'
    },
    {
      'label': 'News & Alerts',
      'url': '/news-alerts'
    },
    {
      'label': 'Subscribe to news & alerts',
      'url': null
    },
  ],
  expanded: false,
  subscription: {
    isLoggedIn: true,
    subscriptionLink: '#',
    subscriptionLabel: 'My subscription',
    logOutLink: '#',
    logOutLabel: 'Log out',
  },
};


export const BreadcrumbExpandedLoggedOut = Template.bind({});
BreadcrumbExpandedLoggedOut.args = {
  items: [
    {
      'label': 'Home',
      'url': '/'
    },
    {
      'label': 'News & Alerts',
      'url': '/news-alerts'
    },
    {
      'label': 'Subscribe to news & alerts',
      'url': null
    },
  ],
  expanded: true,
  subscription: {
    isLoggedIn: false,
    loggedOutLabel: 'New user?',
    loggedOutButtonLabel: 'Subscribe now',
    loggedOutButtonLink: '#',
  },
};

export const BreadcrumbExpandedLoggedIn = Template.bind({});
BreadcrumbExpandedLoggedIn.args = {
  items: [
    {
      'label': 'Home',
      'url': '/'
    },
    {
      'label': 'News & Alerts',
      'url': '/news-alerts'
    },
    {
      'label': 'Subscribe to news & alerts',
      'url': null
    },
  ],
  expanded: true,
  subscription: {
    isLoggedIn: true,
    subscriptionLink: '#',
    subscriptionLabel: 'My subscription',
    logOutLink: '#',
    logOutLabel: 'Log out',
  },
};
