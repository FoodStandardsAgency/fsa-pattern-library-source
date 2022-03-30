import multifieldGroup from './multifieldGroup.html.twig';
import multifieldGroupContent from './multifieldGroupContent.html.twig';
import './multifieldGroup.scss';

export default {
  title: 'Components/Form/Multifield Group',
};

const Template = (args) => multifieldGroup(args);
const ContentTemplate = (args) => multifieldGroupContent(args);

export const MultifieldGroup = Template.bind({});
MultifieldGroup.args = {
  content: ContentTemplate.bind({}),
  label: 'Enter the process step details',
  entity_name: 'Step',
  remove_this: 'Remove this',
  add_another: 'Add another',
};
