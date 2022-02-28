import landingTitle from './landingTitle.html.twig';
import './landingTitle.scss';

export default {
  title: 'Components/Landing/Title',
};

const Template = (args) => landingTitle(args);

export const Title = Template.bind({});
Title.args = {
  title: 'Welcome to the FSA',
};
