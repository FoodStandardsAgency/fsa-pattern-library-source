import badgeDownload from './badgeDownload.html.twig';
import './badgeDownload.scss';

export default {
  title: 'Components/FHRS/Badge Download',
};

const Template = (args) => badgeDownload(args);

export const English = Template.bind({});
English.args = {
  get_code: 'Get code',
  pixels: 'pixels',
  js: {
    label: 'Copy and paste the code below into your page',
    value:
      '<script type="text/javascript" src="https://widget.ratings.food.gov.uk/fhrswidget.jss?FHRSID=390429&Culture=en-GB&version=2"></script>',
    rows: 2,
  },
  preview: 'Preview',
  download_image: 'Download image',
  badges: [
    {
      class_name: 'badge-download',
      rating: 5,
      version: 3,
      size: '259 x 145',
      filesize: '124KB',
      download_link: '#',
    },
    {
      class_name: 'badge-download',
      rating: 5,
      version: 1,
      size: '429 x 102',
      filesize: '559.42KB',
      download_link: '#',
    },
    {
      class_name: 'badge-download',
      rating: 5,
      version: 2,
      size: '480 x 100',
      filesize: '559.42KB',
      download_link: '#'
    },
    {
      class_name: 'badge-download',
      rating: 5,
      version: 4,
      size: '125 x 287',
      filesize: '559.42KB',
      download_link: '#'
    },
    {
      class_name: 'badge-download',
      rating: 5,
      version: 5,
      size: '190 x 175',
      filesize: '559.42KB',
      download_link: '#'
    },
  ],
};

export const Welsh = Template.bind({});
Welsh.args = {
  welsh: true,
  get_code: 'Cael cod',
  pixels: 'picsel',
  js: {
    label: 'Copïwch a gludwch y cod isod i\'ch tudalen\n',
    value:
      '<script type="text/javascript" src="https://widget.ratings.food.gov.uk/fhrswidget.jss?FHRSID=390429&Culture=en-GB&version=2"></script>',
    rows: 2,
  },
  preview: 'Rhagolwg',
  download_image: 'Lawrlwytho delwedd',
  badges: [
    {
      class_name: 'badge-download',
      rating: 5,
      version: 3,
      size: '259 x 145',
      filesize: '124KB',
      download_link: '#',
    },
    {
      class_name: 'badge-download',
      rating: 5,
      version: 1,
      size: '429 x 102',
      filesize: '559.42KB',
      download_link: '#',
    },
    {
      class_name: 'badge-download',
      rating: 5,
      version: 2,
      size: '480 x 100',
      filesize: '559.42KB',
      download_link: '#'
    },
    {
      class_name: 'badge-download',
      rating: 5,
      version: 4,
      size: '125 x 287',
      filesize: '559.42KB',
      download_link: '#'
    },
    {
      class_name: 'badge-download',
      rating: 5,
      version: 5,
      size: '190 x 175',
      filesize: '559.42KB',
      download_link: '#'
    },
  ],
};

export const Scottish = Template.bind({});
Scottish.args = {
  get_code: 'Get code',
  pixels: 'pixels',
  js: {
    label: 'Copy and paste the code below into your page',
    value:
      '<script type="text/javascript" src="https://widget.ratings.food.gov.uk/fhrswidget.jss?FHRSID=390429&Culture=en-GB&version=2"></script>',
    rows: 2,
  },
  preview: 'Preview',
  download_image: 'Download image',
  badges: [
    {
      class_name: 'badge-download',
      rating: 'Pass',
      version: 1,
      size: '259 x 145',
      filesize: '124KB',
      download_link: '#',
    },
    {
      class_name: 'badge-download',
      rating: 'Pass',
      version: 2,
      size: '429 x 102',
      filesize: '559.42KB',
      download_link: '#',
    },
    {
      class_name: 'badge-download',
      rating: 'Pass',
      version: 3,
      size: '480 x 100',
      filesize: '559.42KB',
      download_link: '#'
    },
  ],
};
