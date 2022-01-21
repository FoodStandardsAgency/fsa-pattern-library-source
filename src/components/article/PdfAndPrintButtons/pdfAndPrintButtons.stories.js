import pdfAndPrintButtons from './pdfAndPrintButtons.html.twig';
import './pdfAndPrintButtons.scss';

export default {
  title: 'Components/Article/PDF And Print Buttons',
};

const Template = (args) => pdfAndPrintButtons(args);

export const PDFAndPrintButtons = Template.bind({});
PDFAndPrintButtons.args = {
  multipage_guide: false,
  pdf_link: '#',
  pdf_name: 'A third of UK consumers are willing to try lab-grown meat and a quarter would try insects',
  view: 'View',
  as: 'as',
  pdf: 'PDF',
  new_window: 'Opens in a new window',
  print_this_page: 'Print this page',
};

export const MultipageGuideVersion = Template.bind({});
MultipageGuideVersion.args = {
  multipage_guide: true,
  pdf_link: '#',
  pdf_name: 'A third of UK consumers are willing to try lab-grown meat and a quarter would try insects',
  view: 'View',
  as: 'as',
  pdf: 'PDF',
  new_window: 'Opens in a new window',
  print_this_page: 'Print this page',
  view_entire_guide: 'View entire guide as PDF',
  print_guide: 'Print guide',
  multipage_guide_pdf_link: '#',
  multipage_guide_print_link: '#',
};
