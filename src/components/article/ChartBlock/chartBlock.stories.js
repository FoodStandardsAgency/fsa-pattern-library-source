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
    alt: 'Data for 2022',
  },
  downloadThis: 'Download this chart',
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
    },
  ],
};

export const ContentBlock = Template.bind({});
ContentBlock.args = {
  name: 'COVID-19',
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  downloadThis: 'Download this',
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
