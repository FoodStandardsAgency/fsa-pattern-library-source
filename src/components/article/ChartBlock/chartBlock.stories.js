import chartBlock from './chartBlock.html.twig';
import './chartBlock.scss';

export default {
  title: 'Components/Article/Chart',
};

const Template = (args) => chartBlock(args);

export const ChartBlock = Template.bind({});
ChartBlock.args = {
  name: 'COVID-19',
  description: 'Description text goes here and gets added via the text component',
  image: {
    url: 'https://via.placeholder.com/300x300',
    alt: 'Data for 2022',
  },
  content:
    '<table><thead><th>Column 1</th><th>Column 2</th></thead><tbody><tr><td>Row 1 - value 1</td><td>Row 1 - value 2</td></tr><tr><td>Row 2 - value 1</td><td>Row 2 - value 2</td></tr><tr><td>Row 3 - value 1</td><td>Row 3 - value 2</td></tr></tbody></table>',
  downloadThis: 'Download this chart',
  toTable: 'Change to table and accessible view',
  toChart: 'Change to chart view',
  sourceText: 'Source',
  source: {
    url: '#',
    label: 'Food Standards Agency and Committees',
    external: true,
  },
  links: [
    {
      url: 'https://via.placeholder.com/300x300',
      label: 'Image',
    },
    {
      url: '#',
      label: '.xls',
    },
    {
      url: '#',
      label: '.csv',
    },
  ],
};

export const ContentBlock = Template.bind({});
ContentBlock.args = {
  name: 'COVID-19',
  description: 'Description text goes here and gets added via the text component',
  content:
    '<table><thead><th>Column 1</th><th>Column 2</th></thead><tbody><tr><td>Row 1 - value 1</td><td>Row 1 - value 2</td></tr><tr><td>Row 2 - value 1</td><td>Row 2 - value 2</td></tr><tr><td>Row 3 - value 1</td><td>Row 3 - value 2</td></tr></tbody></table>',
  downloadThis: 'Download the data',
  sourceText: 'Source',
  source: {
    url: '#',
    label: 'Food Standards Agency and Committees',
    external: false,
  },
  links: [
    {
      url: '#',
      label: '.xls',
    },
    {
      url: '#',
      label: '.csv',
    },
  ],
};
