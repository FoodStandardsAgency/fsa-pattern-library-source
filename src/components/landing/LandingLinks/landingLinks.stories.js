import landingLinks from './landingLinks.html.twig';
import './landingLinks.scss';

import svgs from '../../svg-icons';

export default {
  title: 'Components/Landing/Landing Links',
  parameters: {
    controls: {
      disabled: false,
    }
  }
};


 const Template = (args) => { 
  return landingLinks(args);
}

export const LandingLinks = Template.bind({});
LandingLinks.args = {
  title: 'Are you looking for specific business guidance?',
  items: [
    {link_text: 'Import', url: '#', svg: svgs.import},
    {link_text: 'Farming', url: '#', svg: svgs.farming},
    {link_text: 'Regulated', url: '#', svg: svgs.regulated},
    {link_text: 'Fish', url: '#', svg: svgs.fish},
    {link_text: 'Meat', url: '#', svg: svgs.meat},
    {link_text: 'Wine', url: '#', svg: svgs.wine}
  ]
};
