import imageSection from './imageSection.html.twig';
import './imageSection.scss';

export default {
  title: 'Components/FHRS/Image Section',
  argTypes: {
    rating: {
      options: [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        'Exempt',
        'AwaitingInspection',
        'AwaitingPublication',
        'Pass',
        '',
      ],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => imageSection(args);

export const ImageSection = Template.bind({});
ImageSection.args = {
  title: 'Images',
  description: '<p>A set of hygiene rating images is available to be used with the API data. The images must only ' +
    'be used in accordance with the <a href="#">FHRS/FHIS Brand Standard and the terms and conditions</a>.</p>\n' +
    '<p>Examples of hygiene rating images, and the sizes available, that can be used with the API data:</p>',
  welsh: false,
  fhrs_badges: [
    {
      class_name: 'image-section',
      rating: 5,
      version: 3,
    },
    {
      class_name: 'image-section',
      rating: 5,
      version: 1,
    },
    {
      class_name: 'image-section',
      rating: 5,
      version: 2,
    },
    {
      class_name: 'image-section',
      rating: 5,
      version: 4,
    },
    {
      class_name: 'image-section',
      rating: 5,
      version: 5,
    },
  ],
  fhis_badges: [
    {
      class_name: 'image-section',
      rating: 'pass',
      version: 1,
    },
    {
      class_name: 'image-section',
      rating: 'pass',
      version: 2,
    },
    {
      class_name: 'image-section',
      rating: 'pass',
      version: 3,
    },
  ],
};