import footNotes from './footNotes.html.twig';
import './footNotes.scss';

export default {
  title: 'Components/Article/Foot Notes',
};

const Template = (args) => footNotes(args);

export const Basic = Template.bind({});
Basic.args = {
  links: [
    {
      key: '1',
      label: 'In favour of men',
    },
    {
      key: '2',
      label: 'Based on average hourly pay',
    },
    {
      key: '3',
      label: 'See action section of this report.',
    },
  ],
};
