import listingItem from './listingItem.html.twig';
import './listingItem.scss';

export default {
  title: 'Components/Search/Listing Item',
  parameters: {
    controls: {
      disable: false,
    },
  },
};

const Template = (args) => {
  return listingItem(args);
};

export const ListingItem = Template.bind({});
ListingItem.args = {
  type: 'Allergy alert',
  title:
    'Update from the Food Standards Agency, Food Standards Scotland and Defra following the rise in cases of feline pancytopenia',
  description:
    'SFC Wholesale Ltd is recalling The Original SFC Bargain Box as it contains milk, which is not mentioned on the label. This means the product is a possible health risk to anyone with an allergy or intolerance to milk or milk constituents.',
  date: '8 September 2021',
  url: '#',
  index: 0,
};
