import footer from './footer.html.twig';
import './footer.scss';

export default {
  title: 'Pattern Library/Components/Footer',
  parameters: {
    controls: {
      disabled: true,
    }
  }
};

export const Template = ({ label, ...args }) => { 
  return footer(args);
}


