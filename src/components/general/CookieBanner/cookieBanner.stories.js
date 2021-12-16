import cookieBanner from './cookieBanner.html.twig';
import './cookieBanner.scss';
import cookieBannerJs from './cookieBanner';

cookieBannerJs();

export default {
  title: 'Components/General/Cookie Banner',
  parameters: {
    layout: 'fullscreen',
  },
}

export const CookieBanner = args => cookieBanner(args);
CookieBanner.args = {
  text: 'We use cookies to make food.gov.uk work, understand how you use the website and make improvements. <br>They aren’t used to identify you personally.',
  find_out_more_link: '#',
  find_out_more_text: 'Find out more about cookies',
  manage_link: '#',
  manage_text: 'Manage cookies',
  accept_button_label: 'Accept cookies',
}