import generateDatepickerContent from '../../../helpers/generateDatepickerContent';

import datepicker from './datepicker.html.twig';
import './datepicker.scss';

export default {
  title: 'Components/Search/Datepicker',
};

const Template = (args) => datepicker(args);

export const Datepicker = Template.bind({});
Datepicker.args = {
    type: 'From',
    label: 'Updated from',
    applyLabel: 'Apply date',
    applyLink: '#',
    selects: [
        { id: 'from_day', label: 'Day', accessibleLabel: 'Select a day', options: generateDatepickerContent('days') },
        { id: 'from_month', label: 'Month', accessibleLabel: 'Select a month', options: generateDatepickerContent('months') },
        { id: 'from_year', label: 'Year', accessibleLabel: 'Select a year', options: generateDatepickerContent('years') },
    ],
};
