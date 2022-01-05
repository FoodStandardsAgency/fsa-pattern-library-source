import onThisPage from './onThisPage.html.twig';
import './onThisPage.scss';

export default {
  title: 'Components/General/On This Page',
};

export const OnThisPage = (args) => onThisPage(args);
OnThisPage.args = {
  on_this_page: 'on this page',
  skip_this_menu: 'skip this menu',
  links: [
    { label: 'Explaning hazards', href: '#' },
    { label: 'Food safety management procedures', href: '#' },
    { label: 'HACCP system in meat plants', href: '#' },
    { label: 'MyHACCP', href: '#' },
    { label: 'MyHACCP step by step', href: '#' },
    { label: 'Small business and retailers', href: '#' },
  ],
};
