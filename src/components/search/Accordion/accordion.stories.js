import generateDatepickerContent from '../../../helpers/generateDatepickerContent';

import accordion from './accordion.html.twig';
import './accordion.scss';

export default {
  title: 'Components/Search/Accordion',
};

const Template = (args) => accordion(args);

export const Open = Template.bind({});
Open.args = {
  title: 'Date',
  name:'date_select',
  fields: [
    {
      type: 'datepicker',
      dateType: 'From',
      id: 'from',
      label: 'Updated from',
      applyLabel: 'Apply date',
      applyLink: '#',
      minimumSelection: 'Please select a year as a minimum, the day and month are optional.',
      invalidDate: 'Please select a valid date combination.',
    },
      {
        type: 'datepicker',
        dateType: 'To',
        id: 'to',
        label: 'Updated to',
        applyLabel: 'Apply date',
        applyLink: '#',
        minimumSelection: 'Please select a year as a minimum, the day and month are optional.',
        invalidDate: 'Please select a valid date combination.',
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
