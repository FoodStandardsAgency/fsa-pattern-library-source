import universalPageSubjectListing from './universalPageSubjectListing.html.twig';

export default {
  title: 'Pages/Universal Page/Subject Listing',
  parameters: {
    controls: { disabled: true },
    layout: 'fullscreen',
  },
};

export const SubjectListing = () => {
  return universalPageSubjectListing();
};
