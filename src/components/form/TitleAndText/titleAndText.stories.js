import titleAndText from './titleAndText.html.twig';
import './titleAndText.scss';

export default {
  title: 'Components/Form/Title and Text',
};

const Template = (args) => {
  return titleAndText(args);
};

export const h1 = Template.bind({});
h1.storyName = 'h1';
h1.args = {
  title: 'Form title',
  description:
    '<p> Create an account to get food and allergy alerts by email or text message. This is a free service. Before you can subscribe we need to verify your email address. Please enter a valid email address in the box below and click "Create account".</p>',
  tag: 'h1',
};

export const h2 = Template.bind({});
h2.storyName = 'h2';
h2.args = {
  title: 'Form title',
  description:
    '<p>Create an account to get food and allergy alerts by email or text message. This is a free service. Before you can subscribe we need to verify your email address. Please enter a valid email address in the box below and click "Create account".</p>',
  tag: 'h2',
};

export const form = Template.bind({});
form.args = {
  title: 'SMS frequency',
  description: '<p>SMS updates are sent immediately</p>',
  tag: 'h5',
};
