import feedback from './feedback.html.twig';
import './feedback.scss';
import feedbackJs from './feedback';

feedbackJs();

export default {
  title: 'Components/General/Feedback',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Feedback = (args) => feedback(args);
Feedback.args = {
  section_summary: 'Feedback about the content on the page',
  heading: 'Is this page useful?',
  yes: 'Yes',
  useful: 'this page is useful',
  or_text: 'or',
  no: 'No',
  not_useful: 'this page is not useful',
  report_question: 'Is there anything wrong with this page?',
  thank_you: 'Thanks for your feedback',
  close: 'Close',
  the_feedback_form: 'the feedback form',
  improve_question: 'How should we improve this page?',
  feedback: 'feedback',
  submit: 'Submit',
};
