import breadcrumb from './breadcrumb.html.twig';
import './breadcrumb.scss';

export default {
  title: 'Components/General/Breadcrumb',
  parameters: {
    controls: {
      disabled: true,
    }
  }
};

export const Breadcrumb = ({ label, ...args }) => { 
  return breadcrumb(args);
}

