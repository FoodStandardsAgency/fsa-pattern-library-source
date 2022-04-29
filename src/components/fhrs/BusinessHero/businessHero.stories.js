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
  welsh: false,
  name: "Byrdie's African & Caribbean Cuisine",
  back_link: '#',
  back_to_search_results: 'Back to search results',
  search_local_link: '#',
  search_this_local_authority_area: 'Search this local authority area',
  search_all_link: '#',
  search_all_data: 'Search all data',
  address_title: 'Address',
  address_content: 'The Gas Yard<br>Canterbury Street<br>Coventry<br>CV1 5NR',
  business_type_title: 'Business type',
  business_type_content: 'Restaurant/Cafe/Canteen',
  date_title: 'Date of inspection',
  date_content: '12 November 2021',
  rating: '5',
};

export const Welsh = Template.bind({});
Welsh.args = {
  welsh: true,
  name: "Byrdie's African & Caribbean Cuisine",
  back_link: '#',
  back_to_search_results: 'Yn ôl i’r canlyniadau chwilio',
  search_local_link: '#',
  search_this_local_authority_area: 'Chwilio’r awdurdod lleol hwn',
  search_all_link: '#',
  search_all_data: 'Chwilio holl ddata’r DU',
  address_title: 'Cyfeiriad',
  address_content: 'The Gas Yard<br>Canterbury Street<br>Coventry<br>CV1 5NR',
  business_type_title: 'Math o fusnes',
  business_type_content: 'Restaurant/Cafe/Canteen',
  date_title: 'Arolygiad diwethaf',
  date_content: '12 November 2021',
  rating: '5',
};
