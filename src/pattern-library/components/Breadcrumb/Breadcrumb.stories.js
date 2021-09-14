import breadcrumb from './breadcrumb.html.twig';
import './breadcrumb.scss';

export default {
  title: 'Pattern Library/Components/Breadcrumb',
  parameters: {
    controls: {
      disabled: true,
    }
  }
};

export const Template = ({ label, ...args }) => { 
  return breadcrumb(args);
}

