import localAuthorityMap from './localAuthorityMap.html.twig';
import './localAuthorityMap.scss';
import './assets/fhrs-map.svg';

export default {
  title: 'Components/FHRS/Local Authority Map',
  argTypes: {
    selected_region: {
      options: [
        'wales',
        'east-counties',
        'east-midlands',
        'london',
        'north-east',
        'north-west',
        'northern-ireland',
        'scotland',
        'south-east',
        'south-west',
        '',
      ],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => localAuthorityMap(args);

export const Default = Template.bind({});
Default.args = {
  base_url: window.location.origin,
};

export const NorthWest = Template.bind({});
NorthWest.args = {
  ...Default.args,
  selected_region: 'north-west',
};

export const SouthEast = Template.bind({});
SouthEast.args = {
  ...Default.args,
  selected_region: 'south-east',
};

export const YorkshireAndHumberside = Template.bind({});
YorkshireAndHumberside.args = {
  ...Default.args,
  selected_region: 'yorkshire-and-humberside',
};
