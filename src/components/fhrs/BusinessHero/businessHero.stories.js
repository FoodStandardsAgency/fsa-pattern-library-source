import businessHero from './businessHero.html.twig';
import './businessHero.scss';

export default {
  title: 'Components/FHRS/Business Hero',
  argTypes: {
    rating: {
      options: [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        'Exempt',
        'AwaitingInspection',
        'AwaitingPublication',
        'Pass',
        '',
      ],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => businessHero(args);

export const English = Template.bind({});
English.args = {
  wales_business: false,
  welsh: false,
  name: "Byrdie's African & Caribbean Cuisine",
  back_link: '#',
  back_to_search_results: 'Back to search results',
  search_local_link: '#',
  search_this_local_authority_area: 'Search this local authority area',
  search_all_link: '#',
  search_all_data: 'Search all data',
  address_title: 'Address',
  address_content: 'The Gas Yard<br>Canterbury Street<br>Coventry',
  post_code: 'CV1 5NR',
  business_type_title: 'Business type',
  business_type_content: 'Restaurant/Cafe/Canteen',
  date_title: 'Date of inspection',
  date_content: '12 November 2021',
  rating: '5',
  map: true,
  show_map: 'Show map',
  hide_map: 'Hide map',
};

export const WalesBusiness = Template.bind({});
WalesBusiness.args = {
  wales_business: true,
  welsh: false,
  name: "Byrdie's African & Caribbean Cuisine",
  back_link: '#',
  back_to_search_results: 'Back to search results',
  search_local_link: '#',
  search_this_local_authority_area: 'Search this local authority area',
  search_all_link: '#',
  search_all_data: 'Search all data',
  address_title: 'Address',
  address_content: 'The Gas Yard<br>Canterbury Street<br>Coventry',
  post_code: 'CV1 5NR',
  business_type_title: 'Business type',
  business_type_content: 'Restaurant/Cafe/Canteen',
  date_title: 'Date of inspection',
  date_content: '12 November 2021',
  rating: '5',
  map: true,
  show_map: 'Show map',
  hide_map: 'Hide map',
};

export const Welsh = Template.bind({});
Welsh.args = {
  wales_business: false,
  welsh: true,
  name: "Byrdie's African & Caribbean Cuisine",
  back_link: '#',
  back_to_search_results: 'Yn ôl i’r canlyniadau chwilio',
  search_local_link: '#',
  search_this_local_authority_area: 'Chwilio’r awdurdod lleol hwn',
  search_all_link: '#',
  search_all_data: 'Chwilio holl ddata’r DU',
  address_title: 'Cyfeiriad',
  address_content: 'The Gas Yard<br>Canterbury Street<br>Coventry',
  post_code: 'CV1 5NR',
  business_type_title: 'Math o fusnes',
  business_type_content: 'Restaurant/Cafe/Canteen',
  date_title: 'Arolygiad diwethaf',
  date_content: '12 November 2021',
  rating: '5',
  map: true,
  show_map: 'Dangos map',
  hide_map: 'Cuddio map',
};

export const PrivateAddress = Template.bind({});
PrivateAddress.args = {
  ...English.args,
  private: true,
  private_address: 'Private address',
  registered_with: 'Registered with',
  local_authority_name: 'Canterbury council',
  local_authority: 'local authority',
};

export const PrivateAddressWelsh = Template.bind({});
PrivateAddressWelsh.args = {
  ...Welsh.args,
  private: true,
  private_address: 'Cyfeiriad Preifat',
  registered_with: 'Wedi cofrestru gydag',
  local_authority_name: 'Canterbury council',
  local_authority: 'awdurdod lleol',
};

export const TitleOnly = Template.bind({});
TitleOnly.args = {
  name: "Byrdie's African & Caribbean Cuisine",
};

export const WithPrefix = Template.bind({});
WithPrefix.args = {
  ...English.args,
  name_prefix: 'Get online ratings for',
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  name: 'Search a local authority area',
  description:
    'Click on an area below to find out about hygiene of restaurants, takeaways or food shops in that area.',
};
