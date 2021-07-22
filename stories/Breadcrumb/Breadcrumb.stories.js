import breadcrumb from './breadcrumb.html.twig';
import './breadcrumb.scss';

export default {
  title: 'Example/Breadcrumb',
  parameters: {
    controls: {
      disabled: false,
    }
  }
};

export const Template = ({ label, ...args }) => { 
  return breadcrumb(args);
}

