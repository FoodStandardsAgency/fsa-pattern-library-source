import articleHero from './articleHero.html.twig';
import './articleHero.scss';

export default {
  title: 'Components/Article/Article Hero',
};

const Template = (args) => articleHero(args);

export const Basic = Template.bind({});
Basic.args = {
  title: 'Hazard Analysis and Critical Control Point (HACCP)',
  last_updated_string: 'Last updated',
  last_updated_date: '20 December 2017',
  specific: 'specific',
  pdf_link: '#',
  pdf_name: 'Hazard Analysis and Critical Control Point (HACCP)',
  view: 'View',
  as: 'as',
  pdf: 'PDF',
  new_window: 'Opens in a new window',
  print_this_page: 'Print this page',
  revision_log: false,  
};

export const WithAlert = Template.bind({});
WithAlert.args = {
  type: 'alerts',
  type_string: 'Allergy alert',
  title: 'Hazard Analysis and Critical Control Point (HACCP)',
  last_updated_string: 'Last updated',
  last_updated_date: '20 December 2017',
  specific: 'specific',
  pdf_link: '#',
  pdf_name: 'Hazard Analysis and Critical Control Point (HACCP)',
  view: 'View',
  as: 'as',
  pdf: 'PDF',
  new_window: 'Opens in a new window',
  print_this_page: 'Print this page',
  revision_log: false,  
};

export const WithIntroduction = Template.bind({});
WithIntroduction.args = {
  title: 'Hazard Analysis and Critical Control Point (HACCP)',
  description: 'How to manage the food hygiene and safety procedures in your food business.',
  last_updated_string: 'Last updated',
  last_updated_date: '20 December 2017',
  specific: 'specific',
  pdf_link: '#',
  pdf_name: 'Hazard Analysis and Critical Control Point (HACCP)',
  view: 'View',
  as: 'as',
  pdf: 'PDF',
  new_window: 'Opens in a new window',
  print_this_page: 'Print this page',
  revision_log: false,  
};

export const WithRegion = Template.bind({});
WithRegion.args = {
  type: 'consultations',
  region: ['Northern Ireland'],
  title: 'Hazard Analysis and Critical Control Point (HACCP)',
  last_updated_string: 'Last updated',
  last_updated_date: '20 December 2017',
  specific: 'specific',
  pdf_link: '#',
  pdf_name: 'Hazard Analysis and Critical Control Point (HACCP)',
  view: 'View',
  as: 'as',
  pdf: 'PDF',
  new_window: 'Opens in a new window',
  print_this_page: 'Print this page',
  revision_log: false,
};

export const WithEverything = Template.bind({});
WithEverything.args = {
  type: 'news',
  region: ['England'],
  title: 'Hazard Analysis and Critical Control Point (HACCP)',
  description: 'How to manage the food hygiene and safety procedures in your food business.',
  last_updated_string: 'Last updated',
  last_updated_date: '20 December 2017',
  specific: 'specific',
  pdf_link: '#',
  pdf_name: 'Hazard Analysis and Critical Control Point (HACCP)',
  view: 'View',
  as: 'as',
  pdf: 'PDF',
  new_window: 'Opens in a new window',
  print_this_page: 'Print this page',
  revision_log: true,
  revision_label: 'See all updates',
};
