import inputField from './inputField.html.twig';
import './inputField.scss';

export default {
  title: 'Components/Form/Input Field',
  parameters: {
    layout: 'centered',
    controls: {
      disable: false,
    },
  },
};

const Template = (args) => {
  return inputField(args);
};

export const Normal = Template.bind({});
Normal.args = {
  id: 'email',
  name: 'email',
  label: 'Email or username',
  caption: 'Enter your email address or username.',
  required: '',
  error: false,
  error_message: 'Unrecognized username or password',
  value: '',
  type: 'text',
};

export const Error = Template.bind({});
Error.args = {
  ...Normal.args,
  required: 'required',
  error: true,
  error_message: 'This information is required',
  value: '',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  id: 'email',
  name: 'email',
  label: 'Email or username',
  caption: 'Enter your email address or username.',
  placeholder: 'Please enter your email address.',
  required: '',
  error: false,
  error_message: 'Unrecognized username or password',
  value: '',
  type: 'text',
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  id: 'email',
  name: 'email',
  label: 'Email or username',
  caption: 'Enter your email address or username.',
  required: '',
  error: false,
  error_message: 'Unrecognized username or password',
  value: 'test@example.com',
  type: 'email',
};

export const Password = Template.bind({});
Password.args = {
  id: 'password',
  name: 'password',
  label: 'Password',
  caption: 'Enter your password.',
  required: 'required',
  error: false,
  error_message: 'Unrecognized password',
  value: '',
  type: 'password',
};

export const Phone = Template.bind({});
Phone.args = {
  id: 'phone',
  name: 'phone',
  label: 'Phone number',
  caption: '',
  required: 'required',
  error: false,
  error_message: '',
  value: '',
  type: 'tel',
  prefix: '+44',
  nested: true,
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  id: 'email',
  name: 'email',
  label: 'Email or username',
  caption: 'Enter your email address or username.',
  required: '',
  error: false,
  error_message: 'Unrecognized username or password',
  value: '',
  type: 'text',
  tooltip: {
    open: 'Open tooltip',
    close: 'Close',
    message: 'Type your email address here.',
  },
  guidance_popup: {
    open_popup: 'More in information',
    label: 'Help',
    more_link: '#',
    more_text: 'More help topics',
    content: `<h3>Preparatory Stage A: Prerequisite food hygiene requirements</h3>
    <p>"Prerequisites" are basic hygiene measures that should be in place in your food business prior to you undertaking a HACCP study. They include matters such as supplier approval, incoming material specifications, finished product specifications and staff training.
    The MyHACCP tool shows you a list of common prerequisites and asks you to select the ones you have properly considered and for which you have put in place adequate controls. You will then be invited to identify the location of documents such as policies and procedures where further details of these prerequisite controls may be found. It is common for food businesses to place all these documents into a “prerequisite manual” for ease of reference, but this is not a requirement. 
    The list of prerequisites in MyHACCP is not exhaustive and there may be other matters, such as temperature control, which are relevant for your business.
    Once you have identified which prerequisites are relevant to your business, you should develop procedures, or review existing documentation, to ensure that adequate control measures are in place.
    For each prerequisite you may wish to include the following points in your procedure.
    Top tip: Use the list of common prerequisites in MyHACCP as a checklist to ensure that you have properly considered all the relevant hygiene measures that should be in place before you start your HACCP study.
    Read about the general requirements for each prerequisite listed in the MyHACCP Web Tool.</p>
    <h3>Operational Prerequisites</h3>
    <p>Most prerequisites are general in nature and their purpose is to ensure the Sed a</p>`,
  },
};

export const WithCharacterLimit = Template.bind({});
WithCharacterLimit.args = {
  id: 'product-name',
  name: 'product-name',
  label: 'Name of the product',
  required: '',
  error: false,
  value: '',
  type: 'text',
  max_length_prefix: 'You have',
  max_length_suffix: 'characters remaining.',
  max_length: 40,
};
export const Disabled = Template.bind({});
Disabled.args = {
  id: 'email',
  name: 'email',
  label: 'Email or username',
  caption: 'Enter your email address or username.',
  required: '',
  error: false,
  error_message: 'Unrecognized username or password',
  value: 'test@example.com',
  type: 'email',
  disabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  id: 'email',
  name: 'email',
  label: 'Email or username',
  caption: 'Enter your email address or username.',
  required: '',
  error: false,
  error_message: 'Unrecognized username or password',
  value: 'test@example.com',
  type: 'email',
  read_only: true,
};
