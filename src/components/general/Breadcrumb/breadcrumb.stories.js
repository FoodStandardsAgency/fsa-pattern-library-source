import breadcrumb from './breadcrumbs.html.twig';
import './breadcrumb.scss';
import breadcrumbJs from './breadcrumb.js';

breadcrumbJs();

export default {
  title: 'Components/General/Breadcrumb',
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

const Template = (args) => {
  return breadcrumb(args);
};

export const Breadcrumb = Template.bind({});
Breadcrumb.args = {
  items: [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'Business guidance',
      url: false,
    },
    {
      text: 'Running a business',
      url: '/running-a-business',
    },
    {
      text: 'Hazard Analysis and Critical Control Point',
      url: false,
    },
  ],
  expanded: false,
};

export const BreadcrumbExpanded = Template.bind({});
BreadcrumbExpanded.args = {
  ...Breadcrumb.args,
  expanded: true,
};

export const BreadcrumbLoggedOut = Template.bind({});
BreadcrumbLoggedOut.args = {
  items: [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'News & Alerts',
      url: '/news-alerts',
    },
    {
      text: 'Subscribe to news & alerts',
      url: false,
    },
  ],
  expanded: false,
  subscription: {
    is_logged_in: false,
    logged_out_label: 'Already have a subscription?',
    logged_out_button_label: 'Sign in',
    logged_out_button_link: '#',
  },
};

export const BreadcrumbLoggedIn = Template.bind({});
BreadcrumbLoggedIn.args = {
  ...BreadcrumbLoggedOut.args,
  subscription: {
    is_logged_in: true,
    subscription_link: '#',
    subscription_label: 'My subscription',
    log_out_link: '#',
    log_out_label: 'Log out',
  },
};

export const BreadcrumbExpandedLoggedOut = Template.bind({});
BreadcrumbExpandedLoggedOut.args = {
  ...BreadcrumbLoggedOut.args,
  expanded: true,
  subscription: {
    is_logged_in: false,
    logged_out_label: 'New user?',
    logged_out_button_label: 'Subscribe now',
    logged_out_button_link: '#',
  },
};

export const BreadcrumbExpandedLoggedIn = Template.bind({});
BreadcrumbExpandedLoggedIn.args = {
  ...BreadcrumbLoggedIn.args,
  expanded: true,
};
