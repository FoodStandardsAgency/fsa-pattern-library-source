import landingSubjectListing from './landingSubjectListing.html.twig';

export default {
  title: 'Pages/Landing/Subject Listing',
  parameters: {
    controls: { disabled: true },
    layout: 'fullscreen',
  },
};

export const SubjectListing = () => {
  return landingSubjectListing();
};
