import landingLinks from './landingLinks.html.twig';
import './landingLinks.scss';
import landingLinksJs from './LandingLinks.js';

landingLinksJs();


export default {
  title: 'Pattern Library/Components/Landing Links',
  parameters: {
    controls: {
      disabled: false,
    }
  }
};


 const Template = (args) => { 
  return landingLinks(args);
}

export const Content = Template.bind({});
Content.args = {
  title: 'Regulated Are you looking for specific business guidance?',
  linkText: 'Regulated products',
  url: 'http://google.com'
 
};
