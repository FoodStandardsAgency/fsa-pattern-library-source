import pdfAndPrintButtons from './pdfAndPrintButtons.html.twig';
import './pdfAndPrintButtons.scss';

export default {
  title: 'Components/Article/PDF And Print Buttons',
};

const Template = (args) => pdfAndPrintButtons(args);

export const PDFAndPrintButtons = Template.bind({});
PDFAndPrintButtons.args = {
  pdf_link: '#',
  pdf_name: 'A third of UK consumers are willing to try lab-grown meat and a quarter would try insects',
  view: 'View',
  as: 'as',
  pdf: 'PDF',
  new_window: 'Opens in a new window',
  print_this_page: 'Print this page',
};
