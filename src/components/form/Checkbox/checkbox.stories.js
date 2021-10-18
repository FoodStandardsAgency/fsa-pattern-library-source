import checkbox from './checkbox.html.twig';
import './checkbox.scss';

export default {
  title: 'Components/Form/Checkbox',
  parameters: {
    //Center the component so that the red error border-left is visible.
    layout: "centered",
  }
};

const Template = (args) => checkbox(args);

export const Normal = Template.bind({});
Normal.args = {
  title: 'Food alerts',
  description:
    'Enter the name and address of the UK business where you bought the product and select from the dropdown list.',
  fields: [
    { value: 'one', label: 'Alert one', id: 'one' },
    { value: 'two', label: 'Alert two', id: 'two' },
    { value: 'three', label: 'Alert three', id: 'three' },
  ],
  name: 'first alert',
  required: false,
  error: false,
};

export const Error = Template.bind({});
Error.args = {
  title: 'Food alerts',
  description:
    'Enter the name and address of the UK business where you bought the product and select from the dropdown list.',
  fields: [
    { value: 'one', label: 'Alert one', id: 'one' },
    { value: 'two', label: 'Alert two', id: 'two' },
    { value: 'three', label: 'Alert three', id: 'three' },
  ],
  name: 'second alert',
  required: true,
  error: true,
};
