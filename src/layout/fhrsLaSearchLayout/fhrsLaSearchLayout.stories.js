import fhrsLaSearchLayout from './fhrsLaSearchLayout.html.twig';
import './fhrsLaSearchLayout.scss';

export default {
  title: 'Layout/FHRS Local Authority Search Layout',
};

const Template = (args) => {
  return fhrsLaSearchLayout(args);
};

export const FHRSLocalAuthoritySearchLayout = Template.bind({});
