import relatedContent from './relatedContent.html.twig';
import './relatedContent.scss';

export default {
  title: 'Components/Article/Related Content',
};

const Template = (args) => relatedContent(args);

export const RelatedContent = Template.bind({});
RelatedContent.args = {
  title: 'Related content',
  cards: [
    {
      title: 'Preferences for consumers with food allergies or intolerances when eating out',
      description:
        'The study aimed to develop an understanding of the choices and eating behaviours of food allergic and intolerant consumers when eating out.',
      link: '#',
    },
    {
      title: 'Evaluation of guidance on allergen management and consumer information',
      description:
        'In 2006, we published voluntary Guidance on Allergen Management and Consumer Information. This is best practice guidance on controlling food allergens in the factory setting, with particular reference to avoiding cross-contamination and using appropriate advisory labelling (e.g. ‘may contain’ labelling).',
      link: '#',
    },
    {
      title: 'EAT Study: early introduction of allergenic foods to induce tolerance',
      description:
        'The EAT Study was funded to investigate whether the early introduction of six allergenic foods - milk, peanut, sesame, fish, egg, wheat - into the infant weaning diet, alongside continued breastfeeding, reduced the number of children developing food allergies and other allergic diseases, such as eczema, by the age of three.',
      link: '#',
    },
  ],
};
