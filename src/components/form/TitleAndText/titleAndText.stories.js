import titleAndText from './titleAndText.html.twig';
import './titleAndText.scss';

export default {
  title: 'Components/Form/Title And Text',
  argTypes: {
    tag: {
      options: ['h1', 'h2'],
      control: { type: 'radio' }
    }
  }
};

const Template = (args) => {
  return titleAndText(args);
};

export const TitleAndText = Template.bind({});
TitleAndText.args = {
  title: 'Form title',
  description: 'Create an account to get food and allergy alerts by email or text message. This is a free service. Before you can subscribe we need to verify your email address. Please enter a valid email address in the box below and click "Create account".',
  tag: 'h1',
};
