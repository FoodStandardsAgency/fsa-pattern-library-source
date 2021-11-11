import button from './button.html.twig';
import './button.js';

export default {
  title: 'Components/General/Button',
  argTypes: {
    is_anchor: {
      table: { disable: true },
    }
  },
};

const Template = (args) => {
  return button(args);
};

const darkBackground = {
  backgrounds: {
    default: 'purple',
    values: [
      {name: 'dark', value:'#292828'},
      {name: 'light', value: '#fff'},
      {name: 'purple', value: '#2a0247'},
    ],
  },
};

export const PrimaryAnchor = Template.bind({});
PrimaryAnchor.args = {
  type: 'primary',
  label: 'All News and Alerts',
  url: 'https://www.food.gov.uk/news-alerts',
  element: 'link',
};

export const SecondaryAnchor = Template.bind({});
SecondaryAnchor.args = {
  ...PrimaryAnchor.args,
  type: 'secondary',
};
SecondaryAnchor.parameters = darkBackground;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  type: 'primary',
  label: 'Click me',
  element: 'button',
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  ...PrimaryButton.args,
  type: 'secondary',
};
SecondaryButton.parameters = darkBackground;

export const CancelButton = Template.bind({});
CancelButton.args = {
  ...PrimaryButton.args,
  type: 'cancel',
  label: 'Cancel',
}

export const InputButton = Template.bind({});
InputButton.args = {
  ...PrimaryButton.args,
  element: 'input'
};
