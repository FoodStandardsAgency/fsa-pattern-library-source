import contactLayout from './contactLayout.html.twig';
import "./contactLayout.scss";

export default {
  title: 'Layout/Contact Layout',
}

export const ContactLayout = (args) => {
  return contactLayout(args);
}
ContactLayout.args = {}