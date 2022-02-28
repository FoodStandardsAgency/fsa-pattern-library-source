import subjectListing from './subjectListing.html.twig';
import './subjectListing.scss';

export default {
  title: 'Components/Article/Subject Listing',
};

const Template = (args) => subjectListing(args);

export const Basic = Template.bind({});
Basic.args = {
  section_header: 'In this section',
  subject_listing: [
    {
      title: 'Fish and fishery products',
      links: [
        { label: 'Live bivalve mollusc (LBM) and fishery product approvals', href: '#' },
        { label: 'Importing fishery products or bivalve molluscs', href: '#' },
        { label: 'Freezing requirements for fish and fishery products', href: '#' },
      ],
    },
  ],
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  section_header: 'In this section',
  subject_listing: [
    {
      title: 'Fish and fishery products',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar sed eros at sollicitudin. Nullam pharetra venenatis commodo. Proin mauris elit, convallis id nibh nec, laoreet venenatis enim.',
      links: [
        { label: 'Live bivalve mollusc (LBM) and fishery product approvals', href: '#' },
        { label: 'Importing fishery products or bivalve molluscs', href: '#' },
        { label: 'Freezing requirements for fish and fishery products', href: '#' },
      ],
    },
  ],
};

export const Multiple = Template.bind({});
Multiple.args = {
  section_header: 'In this section',
  subject_listing: [
    {
      title: 'Fish and fishery products',
      links: [
        { label: 'Live bivalve mollusc (LBM) and fishery product approvals', href: '#' },
        { label: 'Importing fishery products or bivalve molluscs', href: '#' },
        { label: 'Freezing requirements for fish and fishery products', href: '#' },
      ],
    },
    {
      title: 'Shellfish guidance',
      links: [
        { label: 'Shellfish Official Controls', href: '#' },
        { label: 'Classification', href: '#' },
      ],
    },
    {
      title: 'Monitoring, reports and surveys',
      links: [
        { label: 'Shellfish production area assessments', href: '#' },
        { label: 'Chemical contaminant monitoring', href: '#' },
        { label: 'Biotoxin and phytoplankton monitoring', href: '#' },
        { label: 'Supplementary sampling', href: '#' },
      ],
    },
    {
      title: 'Related content',
      links: [{ label: 'Prepare your business for Brexit', href: '#' }],
    },
  ],
};
