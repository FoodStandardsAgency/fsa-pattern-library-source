import accordion from './accordion.html.twig';
import './accordion.scss';

export default {
  title: 'Components/Search/Accordion',
};

const Template = (args) => accordion(args);

export const Open = Template.bind({});
Open.args = {
  title: 'Date',
  name: 'date_select',
  fields: [
    {
      type: 'datepicker',
      date_type: 'From',
      id: 'from',
      label: 'Updated from',
      apply_label: 'Apply date',
      apply_link: '#',
      minimum_selection: 'Please select a year as a minimum, the day and month are optional.',
      invalid_date: 'Please select a valid date combination.',
      start_date: 2016,
    },
    {
      type: 'datepicker',
      date_type: 'To',
      id: 'to',
      label: 'Updated to',
      apply_label: 'Apply date',
      apply_link: '#',
      minimum_selection: 'Please select a year as a minimum, the day and month are optional.',
      invalid_date: 'Please select a valid date combination.',
      start_date: 2016,
    },
  ],
  open: true,
  selected: 'selected',
};

export const Closed = Template.bind({});
Closed.args = {
  ...Open.args,
  open: false,
};
