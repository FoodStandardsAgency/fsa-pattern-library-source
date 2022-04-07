import multifieldGroup from './multifieldGroup.html.twig';
import multifieldGroupContent from './multifieldGroupContent.html.twig';
import './multifieldGroup.scss';

export default {
  title: 'Components/Form/Multifield Group',
};

const Template = (args) => multifieldGroup(args);
const ContentTemplate = (args) => multifieldGroupContent({ ...args, step_number: 1 });

export const MultifieldGroup = Template.bind({});
MultifieldGroup.args = {
  template: ContentTemplate.bind({}),
  id: 'multi-steps',
  required: true,
  items: [
    {
      values: {
        step_number: '3',
        step_name: 'Cooking chicken',
        biological: ['salmonella'],
        chemical: ['Bleach', 'Another chemical'],
        physical: ['Hair'],
        allergen: [],
      },
      errors: ['chemical', 'allergen'],
    },
    {
      values: {
        step_number: '5',
        step_name: 'Cooking fish',
        biological: ['salmonella'],
        chemical: ['Bleach', 'Another chemical'],
        physical: ['Hair'],
        allergen: [],
      },
      errors: ['step_name'],
    },
  ],
  label: 'Enter the process step details',
  entity_name: 'Step',
  remove_this: 'Remove this',
  add_another: 'Add another',
};
