import serviceLinks from './serviceLinks.html.twig';
import './serviceLinks.scss';
import serviceLinksJS from './serviceLinks';

serviceLinksJS();

export default {
  title: 'Components/Landing/Service Links',
};

const Template = (args) => serviceLinks(args);

export const FourLinks = Template.bind({});
FourLinks.args = {
  title: 'This is the services title',
  description:
    'This is a description for the services section. Phasellus magna. Curabitur ullamcorper ultricies nisi.',
  links: [
    { label: 'Safer food, better business', href: '#' },
    { label: 'Apply for a regulated product authorisation', href: '#' },
    { label: 'Register a food business', href: '#' },
    { label: 'Allergen guidance for businesses', hash: '#' },
  ],
};

export const SixLinks = Template.bind({});
SixLinks.args = {
  title: 'This is the services title',
  description:
    'This is a description for the services section. Phasellus magna. Curabitur ullamcorper ultricies nisi.',
  links: [
    { label: 'Safer food, better business', href: '#' },
    { label: 'Apply for a regulated product authorisation', href: '#' },
    { label: 'Register a food business', href: '#' },
    { label: 'Allergen guidance for businesses', hash: '#' },
    { label: 'Safer food, better business', href: '#' },
    { label: 'Apply for a regulated product authorisation', href: '#' },
  ],
};


export const EightLinks = Template.bind({});
EightLinks.args = {
  title: 'This is the services title',
  description:
    'This is a description for the services section. Phasellus magna. Curabitur ullamcorper ultricies nisi.',
  links: [
    { label: 'Safer food, better business', href: '#' },
    { label: 'Apply for a regulated product authorisation', href: '#' },
    { label: 'Register a food business', href: '#' },
    { label: 'Allergen guidance for businesses', hash: '#' },
    { label: 'Safer food, better business', href: '#' },
    { label: 'Apply for a regulated product authorisation', href: '#' },
    { label: 'Register a food business', href: '#' },
    { label: 'Allergen guidance for businesses', hash: '#' },
  ],
};
