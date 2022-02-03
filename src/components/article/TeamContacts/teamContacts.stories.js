import teamContacts from './teamContacts.html.twig';
import './teamContacts.scss';

export default {
  title: 'Components/Article/Team Contacts',
};

const Template = (args) => teamContacts(args);

export const RelatedContent = Template.bind({});
RelatedContent.args = {
  team_contacts: 'Team contacts',
  team_name: 'Food additives team ',
  team_email: 'foodadditives@foos.gov.uk',
};
