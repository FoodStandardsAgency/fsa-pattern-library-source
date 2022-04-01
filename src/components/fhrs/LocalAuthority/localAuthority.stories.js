import localAuthority from './localAuthority.html.twig';
import './localAuthority.scss';
import logo from './coventryGovLogo';

export default {
  title: 'Components/FHRS/Local Authority',
};

const Template = (args) => localAuthority(args);

export const Default = Template.bind({});
Default.args = {
  local_authority: 'Local Authority',
  name_title: 'Name',
  name_content: 'Coventry City Council',
  website_title: 'Website',
  website_url: 'www.coventry.gov.uk',
  email_title: 'Email',
  email_address: 'ehcommercialverylongemailaddress@coventry.gov.uk',
  logo_svg: logo,
};

export const SearchBy = Template.bind({});
SearchBy.args = {
  local_authority: 'The data is provided by Coventry City Council',
  website_title: 'Website',
  website_url: 'www.coventry.gov.uk',
  email_title: 'Email',
  email_address: 'ehcommercial@coventry.gov.uk',
  logo_svg: logo,
};
