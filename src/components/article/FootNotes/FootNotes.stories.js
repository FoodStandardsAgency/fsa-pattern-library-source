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
      label: 'If this an internal link then this would be the icon',
    },
    {
      key: '2',
      label: 'Sometimes the link might be amongst other text ',
      label_postfix: 'and there could be some text after the link',
    },
    {
      key: '3',
      label: 'and then the link is added and it can go over two lines if needed',
      label_prefix: 'Or the resource could be before the link',
    },
  ],
};
