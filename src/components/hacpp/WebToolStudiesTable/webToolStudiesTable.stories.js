import webToolStudiesTable from './webToolStudiesTable.html.twig';
import './webToolStudiesTable.scss';

export default {
  title: 'Components/HACPP/Web Tool Studies Table',
};

const row = {
  label: 'Study',
  created_at: '17/04/2020',
  updated_at: '17/04/2020',
  status: 'Active',
  button_label: 'Resume',
  url: '#',
  more_options: 'More options',
  options: [
    {
      url: '#',
      label: 'Download',
    },
    {
      url: '#',
      label: 'Copy',
    },
    {
      url: '#',
      label: 'Delete',
    },
  ],
};

export const WebToolStudiesTable = (args) => webToolStudiesTable(args);
WebToolStudiesTable.args = {
  study_name: 'Study name',
  created_on: 'Created on',
  last_updated: 'Last updated',
  status: 'Status',
  rows: Array(10).fill(row),
};
