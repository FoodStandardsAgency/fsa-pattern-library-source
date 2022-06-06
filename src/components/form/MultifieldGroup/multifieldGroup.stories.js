import multifieldGroup from './multifieldGroup.html.twig';
import multifieldGroupContent from './multifieldGroupContent.html.twig';
import multifieldGroupContentFirstStep from './multifieldGroupContentFirstStep.html.twig';
import './multifieldGroup.scss';

export default {
  title: 'Components/Form/Multifield Group',
};

const Template = (args) => multifieldGroup(args);
const ContentTemplate = (args) => multifieldGroupContent({ ...args });
const FirstItemContentTemplate = (args) => multifieldGroupContentFirstStep({ ...args });

export const Default = Template.bind({});
Default.args = {
  template: ContentTemplate.bind({}),
  id: 'multi-steps',
  required: true,
  items: encodeURIComponent(
    JSON.stringify([
      {
        values: {
          step_number: '3',
          step_name: 'Cooking chicken',
          biological: ['salmonella'],
          chemical: ['Bleach', 'Another chemical'],
          physical: ['Hair'],
          allergen: [],
          delivery_method: 'sms',
          notes: 'nothing',
          frequency: 'daily',
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
          notes: '',
          frequency: 'weekly',
        },
        errors: ['step_name', 'frequency'],
        delivery_method: 'email',
      },
    ])
  ),
  label: 'Enter the process step details',
  remove_this: 'Remove this step',
  add_another: 'Add another step',
};

export const FrozenSteps = Template.bind({});
FrozenSteps.args = {
  template: ContentTemplate.bind({}),
  id: 'multi-steps',
  frozen_steps: true,
  items: encodeURIComponent(
    JSON.stringify([
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
    ])
  ),
  label: 'Enter the process step details',
  remove_this: 'Remove this step',
  add_another: 'Add another step',
};

export const AnotherTemplateForFirstItem = Template.bind({});
AnotherTemplateForFirstItem.args = {
  template: ContentTemplate.bind({}),
  first_item_template: FirstItemContentTemplate.bind({}),
  id: 'multi-steps',
  required: true,
  items: encodeURIComponent(
    JSON.stringify([
      {
        values: {
          step_number: '3',
          step_name: 'Cooking chicken',
          biological: ['salmonella'],
          chemical: ['Bleach', 'Another chemical'],
          physical: ['Hair'],
          allergen: [],
          delivery_method: 'sms',
          notes: 'nothing',
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
          notes: '',
        },
        errors: ['step_name'],
        delivery_method: 'email',
      },
    ])
  ),
  label: 'Enter the process step details',
  remove_this: 'Remove this step',
  add_another: 'Add another step',
};
