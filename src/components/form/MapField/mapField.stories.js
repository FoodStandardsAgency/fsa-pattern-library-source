import mapField from './mapField.html.twig';
import './mapField.scss';

export default {
  title: 'Components/Form/Map Field',
};

const Template = (args) => mapField(args);

export const MapField = Template.bind({});
MapField.args = {
  label: 'What is the address of your business?',
  button: 'Search on the map',
  name: 'business_address',
  address: '',
  required: '',
  error: false,
  error_message: '',
};
