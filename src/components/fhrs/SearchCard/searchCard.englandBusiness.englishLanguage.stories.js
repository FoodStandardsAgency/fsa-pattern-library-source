import searchCard from './searchCard.html.twig';
import './searchCard.scss';
import { fhrsRatingsOptions } from '../../default-content.js';

export default {
  title: 'Components/FHRS/Search Card/England Business/English Language',
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
  business_name: "Canterbury's Delicatessen & Sandwich Bar",
  business_link: '#',
  private: false,
  address: 'Canterburys Delicatessen<br>4A Main Street<br>Keyworth<br>Nottinghamshire',
  post_code: 'NG12 5AD',
  last_inspected: 'Last inspected',
  rating_date: '3 December 2018',
  rating: '5',
  private_address: 'Private address',
  registered_with: 'Registered with',
  local_authority_name: 'Rushcliffe',
  local_authority: 'local authority',
  business_say: 'What the business says',
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

export const AwaitingInspection = Template.bind({});
AwaitingInspection.args = {
  ...Default.args,
  rating: 'AwaitingInspection',
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
