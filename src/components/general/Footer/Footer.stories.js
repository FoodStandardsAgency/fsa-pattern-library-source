import footer from './footer.html.twig';
import './footer.scss';

export default {
  title: 'Components/General/Footer',
  parameters: {
    controls: {
      disabled: true,
    }
  }
};

export const Footer = ({ label, ...args }) => { 
  return footer(args);
}


