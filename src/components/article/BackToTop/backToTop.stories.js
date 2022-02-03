import backToTop from './backToTop.html.twig';
import './backToTop.scss';

export default {
  title: 'Components/Article/Back To Top',
};

const Template = (args) => backToTop(args);

export const BackToTop = Template.bind({});
BackToTop.args = {
  back_to_top: 'Back to top',
};
