import { NormalModule } from 'webpack';
import checkbox from './checkbox.html.twig';

export default {
  title: 'Components/Form/Checkbox',
};

const Template = (args) => checkbox(args);

export const Normal = Template.bind({});
Normal.args = {
  title: 'Food alerts',
  description:
    'Enter the name and address of the UK business where you bought the product and select from the dropdown list.',
  fields: [
    { value: 'one', label: 'Alert one' },
    { value: 'two', label: 'Alert two' },
    { value: 'three', label: 'Alert three' },
  ],
  required: true,
  disabled: true,
};
