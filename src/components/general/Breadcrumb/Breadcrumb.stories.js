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
      'url': null
    },
    {
      'text': 'Running a business',
      'url': '/running-a-business'
    },
    {
      'text': 'Hazard Analysis and Critical Control Point',
      'url': null
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
      'url': null
    },
    {
      'text': 'Running a business',
      'url': '/running-a-business'
    },
    {
      'text': 'Hazard Analysis and Critical Control Point',
      'url': null
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
      'url': null
    },
  ],
  expanded: false,
  subscription: {
    isLoggedIn: false,
    loggedOuttext: 'Already have a subscription?',
    loggedOutButtontext: 'Sign in',
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
      'url': null
    },
  ],
  expanded: false,
  subscription: {
    isLoggedIn: true,
    subscriptionLink: '#',
    subscriptiontext: 'My subscription',
    logOutLink: '#',
    logOuttext: 'Log out',
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
      'url': null
    },
  ],
  expanded: true,
  subscription: {
    isLoggedIn: false,
    loggedOuttext: 'New user?',
    loggedOutButtontext: 'Subscribe now',
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
      'url': null
    },
  ],
  expanded: true,
  subscription: {
    isLoggedIn: true,
    subscriptionLink: '#',
    subscriptiontext: 'My subscription',
    logOutLink: '#',
    logOuttext: 'Log out',
  },
};
