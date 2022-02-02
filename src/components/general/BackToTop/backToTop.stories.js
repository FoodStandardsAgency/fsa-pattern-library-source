import backToTop from './backToTop.html.twig';
import './backToTop.scss';

export default {
  title: 'Components/General/Back To Top',
};

const Template = (args) => backToTop(args);

export const BackToTop = Template.bind({});
BackToTop.args = {
  back_to_top: 'Back to top',
};
