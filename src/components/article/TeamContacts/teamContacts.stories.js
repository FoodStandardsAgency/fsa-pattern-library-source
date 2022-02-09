import teamContacts from './teamContacts.html.twig';
import './teamContacts.scss';

export default {
  title: 'Components/Article/Team Contacts',
};

const Template = (args) => teamContacts(args);

export const TeamContacts = Template.bind({});
TeamContacts.args = {
  team_contacts: 'Team contacts',
  teams: [
    {
      team_name: 'Food additives team ',
      team_email: 'foodadditives@foos.gov.uk',
    },
  ],
};

export const MultipleTeamContacts = Template.bind({});
MultipleTeamContacts.args = {
  team_contacts: 'Team contacts',
  teams: [
    {
      team_name: 'Food additives team ',
      team_email: 'foodadditives@food.gov.uk',
    },
    {
      team_name: 'Information Knowledge Management',
      team_email: 'informationmanagement@food.gov.uk',
    },
    {
      team_name: 'Press and Media',
      team_email: 'fsa.communications@food.gov.uk',
    },
  ],
};
