import fhrsLayout from './fhrsLayout.html.twig';
import './fhrsLayout.scss';

export default {
  title: 'Layout/FHRS Layout',
  layout: 'fullscreen',
};

const Template = (args) => {
  return fhrsLayout(args);
};

export const FHRSLayout = Template.bind({});
