import fhrsLayout from './fhrsLayout.html.twig';
import './fhrsLayout.scss';

export default {
  title: 'Layout/FHRS Layout',
};

const Template = (args) => {
  return fhrsLayout(args);
};

export const FHRSLayout = Template.bind({});
