import multivalueField from './multivalueField.html.twig';
import './multivalueField.scss';

export default {
  title: 'Components/Form/Multivalue Field',
};

const Template = (args) => multivalueField(args);

export const MultivalueField = Template.bind({});
MultivalueField.args = {
  add_another: 'Add another biological hazard',
  id: 'email',
  name: 'email[]',
  label: 'Email or username',
  caption: 'Enter your email address or username.',
  placeholder: 'Please enter your email address.',
  required: '',
  values: ['mail@google.com', 'red@google.com', 'green@google.com'],
  type: 'text',
};
