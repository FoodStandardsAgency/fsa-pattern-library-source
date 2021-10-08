import formLayout from './formLayout.html.twig';
import "./formLayout.scss";

export default {
  title: 'Layout/Form Layout',
}

export const FormLayout = (args) => {
  return formLayout(args);
}
FormLayout.args = {}