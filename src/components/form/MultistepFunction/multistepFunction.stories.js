import multistepFunction from './multistepFunction.html.twig';
import './multistepFunction.scss';


export default {
  title: 'Components/Form/Multistep Function',
  parameters: {
    controls: {
      disabled: false,
    }
  }
};

const Template = (args) => {
  return multistepFunction(args);
}

export const MultistepFunction = Template.bind({});

MultistepFunction.args = {
  prev_link: '#',
  prev_label: 'Previous',
  prev_button: true,
  prev_button_label: 'Next'
};