import ratingsSearchBox from './ratingsSearchBox.html.twig';
import './ratingsSearchBox.scss';

export default {
  title: 'Components/FHRS/Ratings Search Box',
  parameters: {
    controls: {
      disable: false,
    },
  },
};

const Template = (args) => ratingsSearchBox(args);

export const RatingsSearchBox = Template.bind({});
RatingsSearchBox.args = {
  title: 'Search results',
  business_name_label: 'Business name',
  address_search_label: 'Street, town or postcode',
  location_label: 'Use my location',
  search_map_results_label: 'Search results with map',
  hide_map_results_label: 'Hide results with map',
  more_options_label: 'More search options',
  local_authority_link: {
    url: '#',
    title: 'Search a local authority area',
  },
  left: [
    {
      type: 'dropdown',
      title: 'Business type',
      name: 'business_type',
      id: 'business-type',
      options: [
        {
          text: 'All',
          value: 'all',
        },
        {
          text: 'Distributors/Transporters',
          value: '1',
        },
        {
          text: 'Farmers/Growers',
          value: '2',
        },
      ],
      default: 'all',
    },
    {
      type: 'fieldset',
      legend: 'Hygiene rating',
      fields: [
        {
          type: 'single-radio',
          title: 'Hygiene status',
          name: 'hygiene_rating_or_status',
          value: 'rating',
          label: 'Hygiene rating (England, Northern Ireland and Wales)',
          id: 'rating',
        },
        {
          type: 'dropdown',
          hide_label: true,
          title: 'Hygiene rating',
          name: 'hygiene_rating',
          id: 'hygiene-rating',
          options: [
            {
              text: 'All',
              value: 'all',
            },
            {
              text: '5',
              value: '5',
            },
            {
              text: '4',
              value: '4',
            },
            {
              text: '3',
              value: '3',
            },
            {
              text: '2',
              value: '2',
            },
            {
              text: '1',
              value: '1',
            },
          ],
          default: 'all',
        },
      ],
    },
    {
      type: 'dropdown',
      title: 'Range',
      name: 'range',
      id: 'range',
      options: [
        {
          text: 'Equal',
          value: 'equal',
        },
        {
          text: 'Greater than or equal',
          value: 'gtoe',
        },
        {
          text: 'Less than or equal',
          value: 'ltoe',
        },
      ],
      default: 'equal',
    },
  ],
  right: [
    {
      type: 'dropdown',
      title: 'Country or local authority',
      name: 'country_or_la',
      id: 'country-or-la',
      options: [
        {
          text: 'All',
          value: 'all',
        },
        {
          text: 'England',
          value: 'england',
        },
        {
          text: 'Scotland',
          value: 'scotland',
        },
        {
          text: 'Wales',
          value: 'wales',
        },
      ],
      default: 'all',
    },
    {
      type: 'fieldset',
      legend: 'Hygiene status',
      fields: [
        {
          type: 'single-radio',
          name: 'hygiene_rating_or_status',
          title: 'Hygiene status',
          value: 'status',
          label: 'Hygiene status (Scotland only)',
          id: 'status',
        },
        {
          type: 'dropdown',
          title: 'Hygiene status',
          name: 'hygiene_status',
          id: 'hygiene-status',
          hide_label: true,
          options: [
            {
              text: 'All',
              value: 'all',
            },
            {
              text: 'Pass',
              value: 'pass',
            },
            {
              text: 'Improvement required',
              value: 'improvement_required',
            },
            {
              text: 'Exempt',
              value: 'exempt',
            },
          ],
          default: 'all',
        },
      ],
    },
  ],
  submit_button_label: 'Submit',
};
