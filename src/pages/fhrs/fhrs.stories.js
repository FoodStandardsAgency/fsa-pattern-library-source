import fhrs from './fhrs.html.twig';

export default {
  title: 'Pages/FHRS',
  parameters: {
    controls: {
      disable: true,
    },
    layout: 'fullscreen',
  },
};

export const FHRS = () => {
  return fhrs();
};
