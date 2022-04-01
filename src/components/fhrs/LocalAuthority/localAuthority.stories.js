import localAuthority from './localAuthority.html.twig';
import './localAuthority.scss';
import logo from './coventryGovLogo';

export default {
  title: 'Components/FHRS/Local Authority',
};

export const LocalAuthority = (args) => localAuthority(args);
LocalAuthority.args = {
  local_authority: 'Local Authority',
  name_title: 'Name',
  name_content: 'Coventry City Council',
  website_title: 'Website',
  website_url: 'www.coventry.gov.uk',
  email_title: 'Email',
  email_address: 'ehcommercialverylongemailaddress@coventry.gov.uk',
  logo_svg: logo,
};
