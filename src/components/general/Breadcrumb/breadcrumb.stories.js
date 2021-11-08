import breadcrumb from './breadcrumbs.html.twig';
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
      'text': 'Home',
      'url': '/'
    },
    {
      'text': 'Business guidance',
      'url': false
    },
    {
      'text': 'Running a business',
      'url': '/running-a-business'
    },
    {
      'text': 'Hazard Analysis and Critical Control Point',
      'url': false
    },
  ],
  expanded: false
};

export const BreadcrumbExpanded = Template.bind({});
BreadcrumbExpanded.args = {
  items: [
    {
      'text': 'Home',
      'url': '/'
    },
    {
      'text': 'Business guidance',
      'url': false
    },
    {
      'text': 'Running a business',
      'url': '/running-a-business'
    },
    {
      'text': 'Hazard Analysis and Critical Control Point',
      'url': false
    },
  ],
  expanded: true
};

export const BreadcrumbLoggedOut = Template.bind({});
BreadcrumbLoggedOut.args = {
  items: [
    {
      'text': 'Home',
      'url': '/'
    },
    {
      'text': 'News & Alerts',
      'url': '/news-alerts'
    },
    {
      'text': 'Subscribe to news & alerts',
      'url': false
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
      'text': 'Home',
      'url': '/'
    },
    {
      'text': 'News & Alerts',
      'url': '/news-alerts'
    },
    {
      'text': 'Subscribe to news & alerts',
      'url': false
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
      'text': 'Home',
      'url': '/'
    },
    {
      'text': 'News & Alerts',
      'url': '/news-alerts'
    },
    {
      'text': 'Subscribe to news & alerts',
      'url': false
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
      'text': 'Home',
      'url': '/'
    },
    {
      'text': 'News & Alerts',
      'url': '/news-alerts'
    },
    {
      'text': 'Subscribe to news & alerts',
      'url': false
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