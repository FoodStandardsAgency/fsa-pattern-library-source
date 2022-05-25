import searchCard from './searchCard.html.twig';
import './searchCard.scss';

export default {
  title: 'Components/FHRS/Search Card',
  argTypes: {
    rating: {
      options: [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        'exempt',
        'awaiting-inspection',
        'awaiting-publication',
        'pass',
        '',
      ],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => searchCard(args);

export const English = Template.bind({});
English.args = {
  welsh: false,
  business_name: "Canterbury's Delicatessen & Sandwich Bar",
  business_link: '#',
  private: false,
  address: 'Canterburys Delicatessen<br>4A Main Street<br>Keyworth<br>Nottinghamshire',
  post_code: 'NG12 5AD',
  last_inspected: 'Last inspected',
  rating_date: '3 December 2018',
  business_appeal: false,
  rating: '5',
  private_address: 'Private address',
  registered_with: 'Registered with',
  local_authority_name: 'Newport',
  local_authority: 'local authority',
};

export const WelshBusiness = Template.bind({});
WelshBusiness.args = {
  ...English.args,
  welsh: true,
};

export const WelshPage = Template.bind({});
WelshPage.args = {
  ...WelshBusiness.args,
  last_inspected: 'Arolygiad diwethaf',
  rating_date: '16 Mawrth 2021',
  private_address: 'Cyfeiriad Preifat',
  registered_with: 'wedi cofrestru gydag',
  local_authority_name: 'Newport',
  local_authority: 'awdurdod lleol ',
};

export const Scottish = Template.bind({});
Scottish.args = {
  ...English.args,
  rating: 'pass',
};

export const PrivateAddress = Template.bind({});
PrivateAddress.args = {
  ...English.args,
  private: true,
  rating: '3',
};

export const RecentlyInspected = Template.bind({});
RecentlyInspected.args = {
  ...English.args,
  status_summary: 'Recently inspected',
  status_description: 'New rating to be published soon',
  rating: '0',
};

export const BusinessAppeal = Template.bind({});
BusinessAppeal.args = {
  ...English.args,
  business_appeal: true,
  business_say: 'What the business says',
  rating: '1',
};

export const EnglishBusinessAwaitingInspection = Template.bind({});
EnglishBusinessAwaitingInspection.args = {
  ...English.args,
  rating: 'awaiting-inspection',
  rating_date: '',
};

export const WelshBusinessAwaitingInspection = Template.bind({});
WelshBusinessAwaitingInspection.args = {
  ...EnglishBusinessAwaitingInspection.args,
  welsh: true,
};

export const WelshBusinessRatingAwaited = Template.bind({});
WelshBusinessRatingAwaited.args = {
  ...WelshBusinessAwaitingInspection.args,
  rating: '',
};
