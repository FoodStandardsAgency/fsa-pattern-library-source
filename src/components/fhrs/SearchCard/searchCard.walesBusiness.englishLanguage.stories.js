import searchCard from './searchCard.html.twig';
import './searchCard.scss';

export default {
  title: 'Components/FHRS/Search Card/Wales Business/English Language',
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
        '',
      ],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => searchCard(args);

export const Default = Template.bind({});
Default.args = {
  business_name: "Abbeyfield Wales",
  business_link: '#',
  private: false,
  address: 'Abbeyfield House<br>Parc Hen Blas Estate<br>Llanfairfechan',
  post_code: 'LL33 0RW',
  last_inspected: 'Last inspected',
  rating_date: '3 December 2018',
  rating: '5',
  private_address: 'Private address',
  registered_with: 'Registered with',
  local_authority_name: 'Newport',
  local_authority: 'local authority',
  business_say: 'What the business says',
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
  status_summary: 'Recently inspected',
  status_description: 'New rating to be published soon',
  rating: '0',
};

export const BusinessAppeal = Template.bind({});
BusinessAppeal.args = {
  ...Default.args,
  business_appeal: true,
  rating: '1',
};

export const AwaitingPublication = Template.bind({});
AwaitingPublication.args = {
  ...Default.args,
  rating: 'AwaitingPublication',
  rating_date: '',
};

export const RatingAwaited = Template.bind({});
RatingAwaited.args = {
  ...Default.args,
  rating: '',
  rating_date: '',
};

export const Exempt = Template.bind({});
Exempt.args = {
  ...Default.args,
  rating: 'Exempt',
  rating_date: '',
};

