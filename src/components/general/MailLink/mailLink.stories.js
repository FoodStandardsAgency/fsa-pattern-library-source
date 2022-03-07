import mailLink from './mailLink.html.twig';
import './mailLink.js';

export default {
  title: 'Components/General/Mail Link',
};

const Template = (args) => {
  return mailLink(args);
};

export const MailLink = Template.bind({});
MailLink.args = {
  mail_link: 'test@example.com',
};
