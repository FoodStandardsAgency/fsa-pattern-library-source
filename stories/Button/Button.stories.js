import button from './button.html.twig';
import buttonJs from './Button.js';
import './button.scss';

buttonJs();

export default {
  title: 'Example/Button',
  argTypes: {
    label: { control: 'text' },
    primary: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    onClick: { action: 'onClick' },
  },
  parameters: {
    controls: {
      disabled: false,
    }
  }
};

const Template = ({ label, ...args }) => { 
  return button(args);
}

/** 
 * Write something about the button.
 */
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'Buttonnn',
};
