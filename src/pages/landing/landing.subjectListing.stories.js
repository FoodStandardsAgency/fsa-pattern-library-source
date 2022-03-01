import tableOfContents from '@components/components/article/TableOfContents/tableOfContents.html.twig';
import subjectListing from './landingSubjectListing.html.twig';
import subjectListingNoColumn from './landingSubjectListingNoColumn.html.twig';

export default {
  title: 'Pages/Landing/Subject Listing',
  parameters: {
    controls: { disabled: true },
    layout: 'fullscreen',
  },
};

const Template = (args) => {
  return subjectListing(args);
};

export const SubjectListing = Template.bind({});
SubjectListing.args = {
  on_this_page: tableOfContents({
    title: 'on this page',
    links: [
      { label: 'Fish and fishery products', href: '#' },
      { label: 'Shellfish guidance', href: '#' },
      { label: 'Monitoring, reports and surveys', href: '#' },
      { label: 'Related content', href: '#' },
    ],
  }),
};

const TemplateNoColumn = (args) => {
  return subjectListingNoColumn(args);
};

export const SubjectListingEmptyColumn = TemplateNoColumn.bind({});
SubjectListingEmptyColumn.args = {};
