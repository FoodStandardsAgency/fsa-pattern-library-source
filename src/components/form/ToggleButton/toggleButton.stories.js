import toggleButton from './toggleButton.html.twig';
import './toggleButton.scss';

export default {
  title: 'Components/Form/Toggle Button',
  parameters: {
    //Center the component so that the red error border-left is visible.
    layout: 'centered',
  },
};

const Template = (args) => {
  return toggleButton(args);
};

export const On = Template.bind({});
On.args = {
  label: 'Use my location',
  id: 'toggle-button-location',
};

export const Off = Template.bind({});
Off.args = {
  label: 'Show results with map',
  id: 'toggle-button-map',
};
