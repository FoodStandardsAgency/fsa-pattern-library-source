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
