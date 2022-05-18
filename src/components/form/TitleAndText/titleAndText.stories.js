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

export const h1Underlined = Template.bind({});
h1Underlined.storyName = 'h1 underlined';
h1Underlined.args = {
  title: 'Form title',
  description:
    '<p> Create an account to get food and allergy alerts by email or text message. This is a free service. Before you can subscribe we need to verify your email address. Please enter a valid email address in the box below and click "Create account".</p>',
  tag: 'h1',
  underlined: true,
};

export const h2Underlined = Template.bind({});
h2Underlined.storyName = 'h2 underlined';
h2Underlined.args = {
  ...h1.args,
  tag: 'h2',
  underlined: true,
};

export const h2 = Template.bind({});
h2.storyName = 'h2';
h2.args = {
  ...h1.args,
  tag: 'h2',
};

export const form = Template.bind({});
form.args = {
  title: 'SMS frequency',
  description: '<p>SMS updates are sent immediately</p>',
  tag: 'h3',
};

export const legacyBadge = Template.bind({});
legacyBadge.args = {
  title: 'Legacy online rating code',
  description:
    '<p>The previous version of the online ratings has now been retired.</p><p>Use the code for the high resolution online ratings provided above if you are adding the online rating to a businesses website.</p><p>Use the online rating images provided above if you are sharing across your online or social portfolio.</p><p>The legacy code will remain active until [add date 12 month from launch], after this period it will be retired.</p>',
  tag: 'h3',
  class: 'legacy-badge-title',
};
