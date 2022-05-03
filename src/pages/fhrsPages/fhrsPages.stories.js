import fhrsCompany from './fhrsCompany.html.twig';
import fhrsSearch from './fhrsSearch.html.twig';

export default {
  title: 'Pages/FHRS',
  parameters: {
    controls: {
      disable: true,
    },
    layout: 'fullscreen',
  },
};

export const FHRSCompany = () => {
  return fhrsCompany();
};

export const FHRSSearch = () => {
  return fhrsSearch();
};
