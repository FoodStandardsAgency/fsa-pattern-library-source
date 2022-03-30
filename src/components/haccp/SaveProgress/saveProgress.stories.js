import saveProgress from './saveProgress.html.twig';
import './saveProgress.scss';

export default {
  title: 'Components/HACCP/Save Progress',
};

const Template = (args) => saveProgress(args);

export const SaveProgress = Template.bind({});
SaveProgress.args = {
  previous: 'Previous',
  prev_link: '#',
  save_and_continue: 'Save and continue',
  message:
    '<p>Navigating within the tool will save your progress.</p><p>If you are leaving the tool entirely you can <a href="#">save this page</a></p>',
};
