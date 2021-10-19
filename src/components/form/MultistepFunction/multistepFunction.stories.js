import multistepFunction from './multistepFunction.html.twig';
import './multistepFunction.scss';


export default {
  title: 'Components/Form/Multistep Function',
  parameters: {
    layout: "centered",
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
  prevLink: '#',
  label: 'Next',
  nextLink: '#'
};