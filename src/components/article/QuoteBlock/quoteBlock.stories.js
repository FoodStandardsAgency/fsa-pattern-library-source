import quoteBlock from './quoteBlock.html.twig';
import './quoteBlock.scss';

export default {
  title: 'Components/Article/Quote Block',
};

const Template = (args) => quoteBlock(args);

export const Quote = Template.bind({});
Quote.args = {
  quote: 'It’s so important to understand that best before and use-by dates are not the same. If you eat food past the use-by date it could make you or your family seriously ill. I’ve treated a number of patients for food poisoning over the years, and it can be particularly nasty to those more vulnerable to infection such as young children and elderly people. Make sure you’re looking after yourself and always checking the use-by date to keep you and your family safe and healthy.',
};

export const WithAuthor = Template.bind({});
WithAuthor.args = {
  quote: 'These findings are worrying. They indicate that people are often confused about food dates, potentially putting themselves and others at risk of illness. A use-by date on food is there for a reason. It is about safety. After the use-by date you cannot cook, freeze or eat the food safely, even if it smells or looks ok. It’s really not possible to tell whether food is safe to eat by smelling or tasting it. We would like everyone to take the use-by dates on their food seriously.',
  author: 'Professor Robin May, Chief Scientific Advisor',
};