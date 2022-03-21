import webToolStudiesTable from './webToolStudiesTable.html.twig';
import './webToolStudiesTable.scss';

export default {
  title: 'Components/Article/Web Tool Studies Table',
};

export const WebToolStudiesTable = (args) => webToolStudiesTable(args);
WebToolStudiesTable.args = {
  study_name: 'Study name',
  created_on: 'Created on',
  last_updated: 'Last updated',
  status: 'Status',
  rows: [
    {
      label: 'Pack size',
      created_at: '250g',
      updated_at: '250g',
      status: '250g',
      button: {
        url: '#',
        label: 'Resume',
      },
      more_options: 'More options',
      options: [{
          url: '#',
          label: 'Download',
        },{
        url: '#',
        label: 'Copy',
      },
        {
          url: '#',
          label: 'Delete',
        }],
    },
    {
      label: 'Use by',
      content: 'all dates between 2 September to 19 October 2020',
    },
    {
      label: 'Allergens',
      content: 'Gluten (oats)',
    },
  ],
};
