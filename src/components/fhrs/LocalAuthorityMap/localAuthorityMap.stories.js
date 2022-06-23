import localAuthorityMap from './localAuthorityMap.html.twig';
import './localAuthorityMap.scss';
import './assets/fhrs-map.svg';

export default {
  title: 'Components/FHRS/Local Authority Map',
  argTypes: {
    selected_region: {
      options: [
        'wales',
        'east-counties',
        'east-midlands',
        'london',
        'north-east',
        'north-west',
        'northern-ireland',
        'scotland',
        'south-east',
        'south-west',
        '',
      ],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => localAuthorityMap(args);

export const Default = Template.bind({});
Default.args = {
  base_url: window.location.origin,
  all_results_link: '#',
  all_results_label: 'Search all data',
  default_map_title: 'Countries and England Regions',
  selected_region_title_prefix: 'In the',
  selected_region_title_suffix: 'area',
  local_authority_label: 'Local authority',
  number_of_businesses_label: 'Number of businesses',
  regions: {
    south_west: {
      name: 'South West',
      link: '#',
    },
    south_east: {
      name: 'South East',
      link: '#',
    },
    east_counties: {
      name: 'East Counties',
      link: '#',
    },
    london: {
      name: 'London',
      link: '#',
    },
    east_midlands: {
      name: 'East Midlands',
      link: '#',
    },
    west_midlands: {
      name: 'West Midlands',
      link: '#',
    },
    wales: {
      name: 'Wales',
      link: '#',
    },
    north_west: {
      name: 'North West',
      link: '#',
    },
    north_east: {
      name: 'North East',
      link: '#',
    },
    scotland: {
      name: 'Scotland',
      link: '#',
    },
    northern_ireland: {
      name: 'Northern Ireland',
      link: '#',
    },
    yorkshire_and_humberside: {
      name: 'Yorkshire and Humberside',
      link: '#',
    },
  },
};

export const NorthWest = Template.bind({});
NorthWest.args = {
  ...Default.args,
  selected_region: 'north-west',
  selected_results_data: [
    {
      local_authority: 'Allerdale',
      local_authority_link: '#',
      number_of_businesses: '1,167',
    },
    {
      local_authority: 'Barrow-in-Furness',
      local_authority_link: '#',
      number_of_businesses: '624',
    },
    {
      local_authority: 'Blackburn',
      local_authority_link: '#',
      number_of_businesses: '1,249',
    },
    {
      local_authority: 'Blackpool',
      local_authority_link: '#',
      number_of_businesses: '1,658',
    },
    {
      local_authority: 'Bolton',
      local_authority_link: '#',
      number_of_businesses: '2,312',
    },
    {
      local_authority: 'Burnley',
      local_authority_link: '#',
      number_of_businesses: '920',
    },
    {
      local_authority: 'Bury',
      local_authority_link: '#',
      number_of_businesses: '1,328',
    },
    {
      local_authority: 'Carlisle City',
      local_authority_link: '#',
      number_of_businesses: '973',
    },
    {
      local_authority: 'Cheshire East',
      local_authority_link: '#',
      number_of_businesses: '2,558',
    },
    {
      local_authority: 'Cheshire West and Chester',
      local_authority_link: '#',
      number_of_businesses: '3,232',
    },
    {
      local_authority: 'Chorley',
      local_authority_link: '#',
      number_of_businesses: '998',
    },
    {
      local_authority: 'Copeland',
      local_authority_link: '#',
      number_of_businesses: '684',
    },
  ],
  page: 1,
  total_pages: 10,
};

export const SouthEast = Template.bind({});
SouthEast.args = {
  ...Default.args,
  selected_region: 'south-east',
  selected_results_data: [
    {
      local_authority: 'Hastings',
      local_authority_link: '#',
      number_of_businesses: '872',
    },
    {
      local_authority: 'Havant',
      local_authority_link: '#',
      number_of_businesses: '985',
    },
    {
      local_authority: 'Horsham',
      local_authority_link: '#',
      number_of_businesses: '1,298',
    },
    {
      local_authority: 'Isle of Wight',
      local_authority_link: '#',
      number_of_businesses: '2,072',
    },
    {
      local_authority: 'Lewes',
      local_authority_link: '#',
      number_of_businesses: '1,057',
    },
    {
      local_authority: 'Maidstone',
      local_authority_link: '#',
      number_of_businesses: '1,310',
    },
    {
      local_authority: 'Medway',
      local_authority_link: '#',
      number_of_businesses: '1,928',
    },
    {
      local_authority: 'Mid Sussex',
      local_authority_link: '#',
      number_of_businesses: '1,340',
    },
    {
      local_authority: 'Milton Keynes',
      local_authority_link: '#',
      number_of_businesses: '2,324',
    },
    {
      local_authority: 'Mole Valley',
      local_authority_link: '#',
      number_of_businesses: '792',
    },
    {
      local_authority: 'New Forest',
      local_authority_link: '#',
      number_of_businesses: '1,742',
    },
    {
      local_authority: 'Oxford City',
      local_authority_link: '#',
      number_of_businesses: '1,482',
    },
  ],
  page: 3,
  total_pages: 5,
};
