import searchNoResults from './searchNoResults.html.twig';
import './searchNoResults.scss';
// import listingItemJs from './ListingItem.js';

// listingItemJs();

export default {
  title: 'Pattern Library/Components/Search No Results',
  parameters: {
    controls: {
      disabled: false,
    }
  }
};


const Template = (args) => {
  return searchNoResults(args);
}

export const Content = Template.bind({});
Content.args = {
  url: 'http://google.com',
  url2: 'http://youtube.com',

};