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

export const RelatedContentWithNoLink = Template.bind({});
RelatedContentWithNoLink.args = {
  title: 'Related content',
  text: 'The MyHACCP Tool will be able to produce a food safety management system that shows how your business identifies and controls any hazards that may occur in the food you manufacture. You will find a range of resources to assist you with completing the tool and with understanding implementation of HACCP principles more generally in the Help section.',
  cards: [
    {
      title: 'Preferences for consumers with food allergies or intolerances when eating out',
      description:
        'The study aimed to develop an understanding of the choices and eating behaviours of food allergic and intolerant consumers when eating out.',
      link: '',
      image: {
        url: 'https://via.placeholder.com/300x300',
        alt: 'Image 1',
      },
    },
    {
      title: 'Evaluation of guidance on allergen management and consumer information',
      description:
        'In 2006, we published voluntary Guidance on Allergen Management and Consumer Information. This is best practice guidance on controlling food allergens in the factory setting, with particular reference to avoiding cross-contamination and using appropriate advisory labelling (e.g. ‘may contain’ labelling).',
      link: '',
      image: {
        url: 'https://via.placeholder.com/300x300',
        alt: 'Image 2',
      },
    },
    {
      title: 'EAT Study: early introduction of allergenic foods to induce tolerance',
      description:
        'The EAT Study was funded to investigate whether the early introduction of six allergenic foods - milk, peanut, sesame, fish, egg, wheat - into the infant weaning diet, alongside continued breastfeeding, reduced the number of children developing food allergies and other allergic diseases, such as eczema, by the age of three.',
      link: '',
      image: {
        url: 'https://via.placeholder.com/300x300',
        alt: 'Image 3',
      },
    },
  ],
};

export const RelatedContentWithMarkup = Template.bind({});
RelatedContentWithMarkup.args = {
  title: 'Related content',
  markup:
    '<p>The MyHACCP Tool will be able to produce a food safety management system that shows how your business identifies and controls any hazards that may occur in the food you manufacture. You will find a range of resources to assist you with completing the tool and with understanding implementation of HACCP principles more generally in the Help section.</p>',
  cards: [
    {
      title: 'Who is this site for?',
      markup:
        'The study aimed to develop an understanding of the choices and eating behaviours of food allergic and intolerant consumers when eating out.',
      link: '#',
    },
    {
      title: 'Are you a smaller business?',
      markup:
        'In 2006, we published voluntary Guidance on Allergen Management and Consumer Information. This is best practice guidance on controlling food allergens in the factory setting, with particular reference to avoiding cross-contamination and using appropriate advisory labelling (e.g. ‘may contain’ labelling).',
      link: '#',
    },
    {
      title: 'What next?',
      markup:
        '<ol><li><a href="">Sign up for an account.</a></li><li>Start the MyHACCP process at the beginning or at any point – you can come back and finish it at any time</li><li>Complete the MyHACCP process  - you can preview what the output will look like at any stage</li><li>Print or download the completed food safety management system documents for your records</li></ol>',
      link: '',
    },
  ],
};
