import dropdown from './dropdown.html.twig';
import './dropdown.scss';

export default {
  title: 'Components/Form/Dropdown',
  parameters: {
    //Center the component so that the red error border-left is visible.
    layout: 'centered',
  },
};

const Template = (args) => dropdown(args);

export const Normal = Template.bind({});
Normal.args = {
  title: 'Delivery option',
  description: 'Choose a delivery method from the dropdown list.',
  options: [
    {
      text: 'Email',
      value: 'email',
    },
    {
      text: 'SMS',
      value: 'sms',
    },
  ],
  default: 'email',
  name: 'delivery_method',
  required: '',
  error: false,
};

export const Error = Template.bind({});
Error.args = {
  ...Normal.args,
  required: 'required',
  error: true,
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  ...Normal.args,
  tooltip: {
    open: 'Open tooltip',
    close: 'Close',
    message: Normal.args.description,
  },
};
