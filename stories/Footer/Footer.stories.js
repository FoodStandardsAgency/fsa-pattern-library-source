import footer from './footer.html.twig';
import './footer.scss';

export default {
  title: 'Example/Footer',
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

export const Template = ({ label, ...args }) => { 
  return footer(args);
}


