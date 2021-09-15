import searchNoResults from './searchNoResults.html.twig';
import './searchNoResults.scss';

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
  removeFiltersLink: 'http://google.com',
  foodHygieneRating: 'http://youtube.com'

};