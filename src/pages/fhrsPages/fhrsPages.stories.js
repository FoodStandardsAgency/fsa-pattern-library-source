import fhrsCompany from './fhrsCompany.html.twig';
import fhrsSearch from './fhrsSearch.html.twig';
import fhrsHome from './fhrsHome.html.twig';

export default {
  title: 'Pages/FHRS',
  parameters: {
    controls: {
      disable: true,
    },
    layout: 'fullscreen',
  },
};

export const FHRSHome = () => {
  return fhrsHome();
};

export const FHRSCompany = () => {
  return fhrsCompany();
};

export const FHRSSearch = () => {
  return fhrsSearch();
};
