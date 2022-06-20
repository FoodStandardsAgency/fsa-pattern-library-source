import searchCard from './searchCard.html.twig';
import './searchCard.scss';
import { fhrsRatingsOptions } from '../../default-content.js';

export default {
  title: 'Components/FHRS/Search Card/Wales Business/Welsh Language',
  argTypes: {
    rating: {
      options: fhrsRatingsOptions,
      control: { type: 'select' },
    },
  },
};

const Template = (args) => searchCard(args);

export const Default = Template.bind({});
Default.args = {
  business_name: 'Abbeyfield Wales',
  business_link: '#',
  private: false,
  address: 'Abbeyfield House<br>Parc Hen Blas Estate<br>Llanfairfechan',
  post_code: 'LL33 0RW',
  last_inspected: 'Arolygiad diwethaf',
  rating_date: '16 Mawrth 2021',
  rating: '5',
  private_address: 'Cyfeiriad Preifat',
  registered_with: 'Wedi cofrestru gydag',
  local_authority_name: 'Newport',
  local_authority: 'awdurdod lleol',
  business_say: 'Beth sydd gan y busnes i’w ddweud',
  welsh: true,
  wales_business: true,
};

export const PrivateAddress = Template.bind({});
PrivateAddress.args = {
  ...Default.args,
  private: true,
  rating: '3',
};

export const RecentlyInspected = Template.bind({});
RecentlyInspected.args = {
  ...Default.args,
  status_summary: 'Wedi’i arolygu’n ddiweddar',
  status_description: 'sgôr newydd i’w chyhoeddi’n fuan',
  rating: '0',
};

export const BusinessAppeal = Template.bind({});
BusinessAppeal.args = {
  ...Default.args,
  business_appeal: true,
  rating: '1',
};

export const RatingAwaited = Template.bind({});
RatingAwaited.args = {
  ...Default.args,
  rating: '',
  rating_date: '',
};

export const AwaitingPublication = Template.bind({});
AwaitingPublication.args = {
  ...Default.args,
  rating: 'AwaitingPublication',
  rating_date: '',
};

export const Exempt = Template.bind({});
Exempt.args = {
  ...Default.args,
  rating: 'Exempt',
  rating_date: '',
};
