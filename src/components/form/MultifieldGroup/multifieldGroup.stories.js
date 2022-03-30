import multifieldGroup from './multifieldGroup.html.twig';
import multifieldGroupContent from './multifieldGroupContent.html.twig';
import './multifieldGroup.scss';

export default {
  title: 'Components/Form/Multifield Group',
};

const Template = (args) => multifieldGroup(args);
const ContentTemplate = (args) => multifieldGroupContent(args);

const MultifieldGroupContent = ContentTemplate.bind({});
const inputData = {
  step_number: '3',
  step_name: 'Cooking chicken',
  biological: ['salmonella'],
  chemical: ['Bleach', 'Another chemical'],
  physical: ['Hair'],
  allergen: [],
};

export const MultifieldGroup = Template.bind({});
MultifieldGroup.args = {
  template: ContentTemplate.bind({}),
  items: [
    MultifieldGroupContent(inputData),
    MultifieldGroupContent(inputData),
  ],
  label: 'Enter the process step details',
  entity_name: 'Step',
  remove_this: 'Remove this',
  add_another: 'Add another',
};
