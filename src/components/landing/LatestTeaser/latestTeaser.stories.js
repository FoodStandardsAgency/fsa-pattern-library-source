import latestTeaser from './latestTeaser.html.twig';
import './latestTeaser.scss';

export default {
    title: 'Components/Landing/Latest Teaser',
    argTypes: {

    },
  };
  
  const Template = (args) => latestTeaser(args);
  
  export const newsLatestTeaser = Template.bind({});
  newsLatestTeaser.args = {
    title: 'This is the services title',
    description:
      '<p>This is a description for the services section. Phasellus magna. Curabitur ullamcorper ultricies nisi.</p><p>This is a description for the services section.</p>',
    teaserLinkUrl: '#',
    teaserLink: '',
    cards: [
      { 
        typeClass: 'news', 
        type: 'News', 
        url: '#', 
        title: 'Iceland recalls Iceland Ready to Eat Tikka Chicken Breast Slices because of undeclared milk', 
        date: '5 November 2021'
      },
      { 
        typeClass: 'news', 
        type: 'News', 
        url: '#', 
        title: 'Iceland recalls Iceland Ready to Eat Tikka Chicken Breast Slices because of undeclared milk', 
        date: '5 November 2021'
      },
      { 
        typeClass: 'alerts', 
        type: 'Allergy Alert', 
        url: '#', 
        title: 'Iceland recalls Iceland Ready to Eat Tikka Chicken Breast Slices because of undeclared milk', 
        date: '5 November 2021'
      },
      { 
        typeClass: 'news', 
        type: 'News', 
        url: '#', 
        title: 'Iceland recalls Iceland Ready to Eat Tikka Chicken Breast Slices because of undeclared milk', 
        date: '5 November 2021'
      },
    ],
    ButtonUrl: '#',
    ButtonLabel: 'More News and Alerts',
  };

  export const consultationsLatestTeaser = Template.bind({});
  consultationsLatestTeaser.args = {
    title: 'This is the services title',
    description:
      '<p>This is a description for the services section. Phasellus magna. Curabitur ullamcorper ultricies nisi.</p>',
    teaserLinkUrl: '#',
    teaserLink: 'More about consultations',
    cards: [
      {
        typeClass: 'consultations', 
        type: 'Consultations', 
        url: '#', 
        title: 'Iceland recalls Iceland Ready to Eat Tikka Chicken Breast Slices because of undeclared milk. Iceland recalls Iceland Ready to Eat Tikka Chicken Breast Slices because of undeclared milk', 
        date: '5 November 2021'
      },
      {
        typeClass: 'consultations', 
        type: 'Consultations', 
        url: '#', 
        title: 'Iceland recalls Iceland Ready to Eat Tikka Chicken Breast Slices because of undeclared milk', 
        date: '5 November 2021'
      },
      {
        typeClass: 'consultations', 
        type: 'Consultations', 
        url: '#', 
        title: 'Iceland recalls Iceland Ready to Eat Tikka Chicken Breast Slices because of undeclared milk', 
        date: '5 November 2021'
      },
      {
        typeClass: 'consultations', 
        type: 'Consultations', 
        url: '#', 
        title: 'Iceland recalls Iceland Ready to Eat Tikka Chicken Breast Slices because of undeclared milk', 
        date: '5 November 2021'
      },
    ],
    ButtonUrl: '#',
    ButtonLabel: 'More Consultations',
  };
