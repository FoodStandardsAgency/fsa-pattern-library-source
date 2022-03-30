import saveProgress from './saveProgress.html.twig';
import './saveProgress.scss';

export default {
  title: 'Components/HACCP/Save Progress',
};

const Template = (args) => saveProgress(args);

// The custom callback for a "Previous" button.
// In Drupal implementation locate it in "Drupal.behaviors" namespace.
window.customSaveProgressPrevCallback = function () {
  alert('Here is a previous button');
};

// The custom callback for a "Save and continue" button.
// In Drupal implementation locate it in "Drupal.behaviors" namespace.
window.customSaveProgressNextCallback = function () {
  alert('Here is a save and continue button');
};

export const SaveProgress = Template.bind({});
SaveProgress.args = {
  previous: 'Previous',
  prev_link: '#',
  save_and_continue: 'Save and continue',
  prev_callback: 'customSaveProgressPrevCallback',
  next_callback: 'customSaveProgressNextCallback',
  message:
    '<p>Navigating within the tool will save your progress.</p><p>If you are leaving the tool entirely you can <a href="#">save this page</a></p>',
};
