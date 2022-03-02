import chartBlock from './chartBlock.html.twig';
import './chartBlock.scss';

export default {
  title: 'Components/Article/Chart',
};

const Template = (args) => chartBlock(args);

export const ChartBlock = Template.bind({});
ChartBlock.args = {
  name: 'COVID-19',
  image: {
    url: 'https://via.placeholder.com/400x300',
    alt: 'Data for 2022'
  },
  downloadThisChart: 'Download this chart',
  links: [
    {
      url: 'https://via.placeholder.com/400x300',
      label: 'Image',
    },
    {
      url: '#',
      label: '.xls',
    },
    {
      url: '#',
      label: '.csv',
    }
  ]
};
