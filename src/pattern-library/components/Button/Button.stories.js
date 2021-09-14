import button from './button.html.twig';
import './button.scss';

export default {
  title: 'Pattern Library/Components/Button',
  argTypes: {
    primary: { control: 'boolean' },
  },
  parameters: {
    controls: {
      disabled: true,
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
