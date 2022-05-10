import explanationBlock from './explanationBlock.html.twig';
import './explanationBlock.scss';
import documentDownload from '@components/components/article/DocumentDownload/documentDownload.html.twig';

export default {
  title: 'Components/Article/Explanation Block',
  argTypes: {
    type: {
      options: ['general', 'fsa-explains', 'best-practice', 'tips', 'legal-advice', 'important'],
      control: { type: 'radio' },
    },
  },
};

export const Default = (args) => explanationBlock(args);
Default.args = {
  type: 'general',
  wysiwyg_content:
    '<h4>Lorem ipsum</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tortor, pharetra tempor vehicula eu, sagittis nec odio. Suspendisse hendrerit nisi sed mi accumsan, sed tincidunt lacus volutpat.</p>',
};

export const Important = (args) => explanationBlock(args);
Important.args = {
  type: 'important',
  heading: 'Important',
  wysiwyg_content:
    '<h4>Lorem ipsum</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tortor, pharetra tempor vehicula eu, sagittis nec odio. Suspendisse hendrerit nisi sed mi accumsan, sed tincidunt lacus volutpat.</p>',
};

export const FSAExplains = (args) => explanationBlock(args);
FSAExplains.args = {
  type: 'fsa-explains',
  heading: 'FSA explains',
  wysiwyg_content:
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="#">This is a link</a> pharetra tempor vehicula eu, sagittis nec odio. <a class="external-link" href="#">This is an external link</a> Suspendisse hendrerit nisi sed mi accumsan, sed tincidunt lacus volutpat.</p>',
};

export const BestPractice = (args) => explanationBlock(args);
BestPractice.args = {
  type: 'best-practice',
  heading: 'Best practice',
  wysiwyg_content:
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="#">This is a link</a> pharetra tempor vehicula eu, sagittis nec odio. Suspendisse hendrerit nisi sed mi accumsan, sed tincidunt lacus volutpat.</p>\n' +
    '<ul>\n' +
    '    <li>Lorem ipsum</li>\n' +
    '    <li>Lorem ipsum</li>\n' +
    '    <li>Lorem ipsum</li>\n' +
    '</ul>\n' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra tempor vehicula eu, sagittis nec odio. Suspendisse hendrerit nisi sed mi accumsan, sed tincidunt lacus volutpat.</p>\n' +
    '\n' +
    '<ol>\n' +
    '    <li>Lorem ipsum</li>\n' +
    '    <li>Lorem ipsum</li>\n' +
    '    <li>Lorem ipsum</li>\n' +
    '</ol>',
};

export const Tips = (args) => explanationBlock(args);
Tips.args = {
  type: 'tips',
  heading: 'Tips',
  wysiwyg_content:
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="#">This is a link</a> pharetra tempor vehicula eu, sagittis nec odio. Suspendisse hendrerit nisi sed mi accumsan, sed tincidunt lacus volutpat.</p>\n' +
    documentDownload({
      format: 'pdf',
      link: '#',
      view: 'View',
      name: 'Food Hygiene Advice for Small Businesses',
      as: 'as',
      new_window: 'Open in a new window',
      size: '12MB',
    }),
};

export const LegalAdvice = (args) => explanationBlock(args);
LegalAdvice.args = {
  type: 'legal-advice',
  heading: 'Legal advice',
  wysiwyg_content:
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="#">This is a link</a> pharetra tempor vehicula eu, sagittis nec odio. Suspendisse hendrerit nisi sed mi accumsan, sed tincidunt lacus volutpat.</p>\n' +
    documentDownload({
      format: 'pdf',
      link: '#',
      view: 'View',
      name: 'Food Hygiene Advice for Small Businesses',
      as: 'as',
      new_window: 'Open in a new window',
      size: '12MB',
    }) +
    documentDownload({
      format: 'word',
      link: '#',
      view: 'View',
      name: 'Food Hygiene Advice for Small Businesses',
      as: 'as',
      new_window: 'Open in a new window',
      size: '12MB',
    }) +
    '<ul>\n' +
    '    <li>Lorem ipsum</li>\n' +
    '    <li>Lorem ipsum</li>\n' +
    '    <li>Lorem ipsum</li>\n' +
    '</ul>\n' +
    documentDownload({
      format: 'jpeg',
      link: '#',
      view: 'View',
      name: 'Food Hygiene Advice for Small Businesses',
      as: 'as',
      new_window: 'Open in a new window',
      size: '12MB',
    }),
};

export const EnglishDisplayRating = (args) => explanationBlock(args);
EnglishDisplayRating.args = {
  type: 'general',
  wysiwyg_content:
    '<h3>Display this rating on your website</h3><p>You can display this rating on your website.</p>',
  link_text: 'Get digital FHRS images for your  business',
  link_url: '#',
};

export const ScottishDisplayRating = (args) => explanationBlock(args);
ScottishDisplayRating.args = {
  type: 'general',
  wysiwyg_content:
    '<h3>Display this rating on your website</h3><p>You can display this rating on your website.</p>',
  link_text: 'Get digital FHIS images for your business',
  link_url: '#',
};
