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

const svg = {
  import: `<svg class="icon icon--export" role="presentation" focusable="false" viewBox="0 0 50 50">
  <defs>
    <style>
      .f494b09c-e784-4f47-a136-ddf9cd12f6d3 {
        fill: none;
      }
    </style>
  </defs><title>export</title><g id="af7dd439-a34a-4b07-b3b0-2c08c345ed2d" data-name="export">
    <path d="M41,32a3,3,0,1,1-3,3A3,3,0,0,1,41,32ZM22,35a3,3,0,1,0,3-3A3,3,0,0,0,22,35ZM10,35a3,3,0,1,0,3-3A3,3,0,0,0,10,35ZM33,18V34a1,1,0,0,0,1,1h2a5,5,0,0,1,10,0h1a1,1,0,0,0,1-1V28H36V20h8.12l-.95-1.89A2,2,0,0,0,41.38,17H34A1,1,0,0,0,33,18Zm5,8h9l-2-4H38ZM16,23H7V34a1,1,0,0,0,1,1,5,5,0,0,1,10,0h2a5,5,0,0,1,10,0,1,1,0,0,0,1-1V14a2,2,0,0,0-2-2H8a1,1,0,0,0-1,1v6h9V16a1,1,0,0,1,1.64-.77l6,5a1,1,0,0,1,0,1.54l-6,5A1,1,0,0,1,16,26ZM2,20v2a1,1,0,0,0,1,1H7V19H3A1,1,0,0,0,2,20Z" fill="#FFF"></path>
    <rect class="f494b09c-e784-4f47-a136-ddf9cd12f6d3" width="50" height="50"></rect>
  </g></svg>`

}

export const Content = Template.bind({});
Content.args = {
  title: 'Regulated Are you looking for specific business guidance?',
  linkText: 'Regulated products',
  url: 'http://google.com',
  svg : svg.import
};
