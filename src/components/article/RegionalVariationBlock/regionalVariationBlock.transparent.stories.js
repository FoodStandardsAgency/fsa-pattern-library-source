import regionalVariationBlock from './regionalVariationBlock.html.twig';
import './regionalVariationBlock.scss';
import './../DocumentDownload/documentDownload.scss';

export default {
  title: 'Components/Article/Regional Variation Block/Transparent',
}

export const TextOnly = args => regionalVariationBlock(args);
TextOnly.args = {
  region: ['England'],
  wysiwyg_content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tortor, pharetra tempor vehicula eu, sagittis nec odio. Suspendisse hendrerit nisi sed mi accumsan, sed tincidunt lacus volutpat.</p>',
  transparent_background: true,
}

export const WithLink = args => regionalVariationBlock(args);
WithLink.args = {
  region: ['Northern Ireland'],
  wysiwyg_content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="#">This is a link</a> pharetra tempor vehicula eu, <a class="external-link" href="#">This is an external link</a> sagittis nec odio. Suspendisse hendrerit nisi sed mi accumsan, sed tincidunt lacus volutpat.</p>',
  transparent_background: true,
}

export const WithList = args => regionalVariationBlock(args);
WithList.args = {
  region: ['England', 'Northern Ireland'],
  wysiwyg_content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="#">This is a link</a> pharetra tempor vehicula eu, sagittis nec odio. Suspendisse hendrerit nisi sed mi accumsan, sed tincidunt lacus volutpat.</p>\n' +
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
  transparent_background: true,
}

export const WithFile = args => regionalVariationBlock(args);
WithFile.args = {
  region: ['Wales'],
  wysiwyg_content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="#">This is a link</a> pharetra tempor vehicula eu, sagittis nec odio. Suspendisse hendrerit nisi sed mi accumsan, sed tincidunt lacus volutpat.</p>\n' +
      '<section class="document-download">\n' +
      '  <h3 class="document-download__region">England</h3>\n' +
      '  <div class="document-download__content document-download__content--">\n' +
      '    <span class="document-download__format document-download__format--" aria-hidden="true">PDF</span>\n' +
      '    <div class="document-download__link-wrapper">\n' +
      '      <a href="#" class="document-download__link" target="_blank"><span class="visually-hidden">View</span>Food Hygiene Advice for Small Businesses<span class="visually-hidden">as PDF(Opens in new window)</span></a>\n' +
      '      <span class="document-download__size">12MB</span>\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</section>',
  transparent_background: true,
}

export const Combination = args => regionalVariationBlock(args);
Combination.args = {
  region: ['England', 'Northern Ireland', 'Wales'],
  wysiwyg_content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="#">This is a link</a> pharetra tempor vehicula eu, sagittis nec odio. Suspendisse hendrerit nisi sed mi accumsan, sed tincidunt lacus volutpat.</p>\n' +
      '<section class="document-download">\n' +
      '  <h3 class="document-download__region">England</h3>\n' +
      '  <div class="document-download__content document-download__content--">\n' +
      '    <span class="document-download__format document-download__format--" aria-hidden="true">PDF</span>\n' +
      '    <div class="document-download__link-wrapper">\n' +
      '      <a href="#" class="document-download__link" target="_blank"><span class="visually-hidden">View</span>Food Hygiene Advice for Small Businesses<span class="visually-hidden">as PDF(Opens in new window)</span></a>\n' +
      '      <span class="document-download__size">12MB</span>\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</section>\n' +
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra tempor vehicula eu, sagittis nec odio. Suspendisse hendrerit nisi sed mi accumsan, sed tincidunt lacus volutpat.</p>\n' +
      '<p>Suspendisse hendrerit nisi sed mi accumsan, sed tincidunt lacus volutpat.</p>\n' +
      '<section class="document-download">\n' +
      '    <h3 class="document-download__region">Wales</h3>\n' +
      '    <div class="document-download__content document-download__content--">\n' +
      '        <span class="document-download__format document-download__format--" aria-hidden="true">WORD</span>\n' +
      '        <div class="document-download__link-wrapper">\n' +
      '            <a href="#" class="document-download__link" target="_blank"><span class="visually-hidden">View</span>Food Hygiene Advice for Small Businesses<span class="visually-hidden">as PDF(Opens in new window)</span></a>\n' +
      '            <span class="document-download__size">180MB</span>\n' +
      '        </div>\n' +
      '    </div>\n' +
      '</section>\n' +
      '<ul>\n' +
      '    <li>Lorem ipsum</li>\n' +
      '    <li>Lorem ipsum</li>\n' +
      '    <li>Lorem ipsum</li>\n' +
      '</ul>\n' +
      '<section class="document-download">\n' +
      '    <h3 class="document-download__region">Northern Ireland</h3>\n' +
      '    <div class="document-download__content document-download__content--">\n' +
      '        <span class="document-download__format document-download__format--" aria-hidden="true">JPEG</span>\n' +
      '        <div class="document-download__link-wrapper">\n' +
      '            <a href="#" class="document-download__link" target="_blank"><span class="visually-hidden">View</span>Food Hygiene Advice for Small Businesses<span class="visually-hidden">as PDF(Opens in new window)</span></a>\n' +
      '            <span class="document-download__size">20MB</span>\n' +
      '        </div>\n' +
      '    </div>\n' +
      '</section>\n',
  transparent_background: true,
}