import emailField from './emailField.html.twig';
import './emailField.scss'

export default {
  title: 'Components/Form/Email Field',
};

const Template = (args) => emailField(args);

export const EmailField = Template.bind({});
EmailField.args = {
  title: 'Personal information',
  email_label: 'email address',
  email_link: '#',
  email_address: 'rachaels@deeson.co.uk',
  change_email_link: '#',
  change_email_label: 'Change your email address',
};
