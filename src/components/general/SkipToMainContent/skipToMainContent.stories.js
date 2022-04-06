import skipToMainContent from './skipToMainContent.html.twig';
import './skipToMainContent.scss';

export default {
  title: 'Components/General/Skip To Main Content',
  parameters: {
    layout: 'fullscreen',
  },
};

export const SkipToMainContent = (args) => skipToMainContent(args);
SkipToMainContent.args = {
  link_text: 'Skip to main content',
  href: '#',
};
