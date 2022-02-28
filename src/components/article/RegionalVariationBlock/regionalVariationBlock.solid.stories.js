import regionalVariationBlock from './regionalVariationBlock.html.twig';
import './regionalVariationBlock.scss';
import documentDownload from '../DocumentDownload/documentDownload.html.twig';

export default {
  title: 'Components/Article/Regional Variation Block/Solid',
};

export const TextOnly = (args) => regionalVariationBlock(args);
TextOnly.args = {
  region: ['England'],
  wysiwyg_content:
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tortor, pharetra tempor vehicula eu, sagittis nec odio. Suspendisse hendrerit nisi sed mi accumsan, sed tincidunt lacus volutpat.</p>',
  transparent_background: false,
};

export const WithLink = (args) => regionalVariationBlock(args);
WithLink.args = {
  region: ['Northern Ireland'],
  wysiwyg_content:
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="#">This is a link</a> pharetra tempor vehicula eu, sagittis nec odio. <a class="external-link" href="#">This is an external link</a> Suspendisse hendrerit nisi sed mi accumsan, sed tincidunt lacus volutpat.</p>',
  transparent_background: false,
};

export const WithList = (args) => regionalVariationBlock(args);
WithList.args = {
  region: ['England', 'Northern Ireland'],
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
  transparent_background: false,
};

export const WithFile = (args) => regionalVariationBlock(args);
WithFile.args = {
  region: ['Wales'],
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
  transparent_background: false,
};

export const Combination = (args) => regionalVariationBlock(args);
Combination.args = {
  region: ['England', 'Northern Ireland', 'Wales'],
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
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra tempor vehicula eu, sagittis nec odio. Suspendisse hendrerit nisi sed mi accumsan, sed tincidunt lacus volutpat.</p>\n' +
    '<p>Suspendisse hendrerit nisi sed mi accumsan, sed tincidunt lacus volutpat.</p>\n' +
    documentDownload({
      format: 'word',
      link: '#',
      view: 'View',
      name: 'Food Hygiene Advice for Small Businesses',
      as: 'as',
      new_window: 'Open in a new window',
      size: '180MB',
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
      size: '20MB',
    }),
  transparent_background: false,
};
