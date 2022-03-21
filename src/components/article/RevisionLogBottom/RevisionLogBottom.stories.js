import revisionLogBottom from './revisionLogBottom.html.twig';
import './revisionLogBottom.scss';

export default {
  title: 'Components/Article/Revision Log Bottom',
};

const Template = (args) => revisionLogBottom(args);

export const Basic = Template.bind({});
Basic.args = {
  heading: 'Revision log',
  toggle_text_hide: 'Hide all updates',
  toggle_text_show: 'Show all updates',
  published_label: 'Published',
  published: '12 January 2012',
  last_updated_label: '20 January 2017',
  last_updated: 'Last updated',
  logs: [
    {
      key: '1',
      date: '14 December 2014',
      text: 'Updated links',
    },
    {
      key: '2',
      date: '21 December 2014',
      text: 'Updated the step by step process',
    },
    {
      key: '3',
      date: '12 January 2012',
      text: 'First published',
    },
  ],
};
