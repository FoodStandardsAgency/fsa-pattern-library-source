import searchCard from './searchCard.html.twig';
import './searchCard.scss';
import { fhisRatingsOptions } from '../../default-content.js';

export default {
  title: 'Components/FHRS/Search Card/Scotland Business/English Language',
  argTypes: {
    rating: {
      options: fhisRatingsOptions,
      control: { type: 'select' },
    },
  },
};

const Template = (args) => searchCard(args);

export const Default = Template.bind({});
Default.args = {
  business_name: 'Hi Tea',
  business_link: '#',
  private: false,
  address: 'Unit 8b Clydebank Shopping Centre<br>Kilbowie Road<br>Clydebank',
  post_code: 'G81 2UA',
  last_inspected: 'Last inspected',
  rating_date: '16 March 2021',
  rating: 'Pass',
  private_address: 'Private address',
  registered_with: 'Registered with',
  local_authority_name: 'West Dunbartonshire',
  local_authority: 'local authority',
  business_say: 'What the business says',
  fhis: true,
};

export const PrivateAddress = Template.bind({});
PrivateAddress.args = {
  ...Default.args,
  private: true,
  rating: 'PassEatSafe',
};

export const BusinessAppeal = Template.bind({});
BusinessAppeal.args = {
  ...Default.args,
  business_appeal: true,
  rating: 'ImprovementRequired',
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
