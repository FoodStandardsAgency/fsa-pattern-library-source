import helpLayout from './helpLayout.html.twig';
import "./helpLayout.scss";

export default {
  title: 'Layout/Help Layout',
}

export const HelpLayout = (args) => {
  return helpLayout(args);
}
HelpLayout.args = {}