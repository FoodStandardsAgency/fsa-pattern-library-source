import filtersHeader from './filtersHeader.html.twig';
import './filtersHeader.scss';
import filtersHeaderJS from './filtersHeader';

filtersHeaderJS();

export default {
  title: 'Components/Search/Filters Header',
}

const Template = args => filtersHeader(args);

export const FiltersHeader = Template.bind({});
FiltersHeader.args = {
  title: 'Filter your search',
  link_text: 'Return to results',
}