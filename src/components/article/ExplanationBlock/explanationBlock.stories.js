import explanationBlock from './explanationBlock.html.twig';
import './explanationBlock.scss';

export default {
  title: 'Components/Article/Explanation Block',
  type: {
    options: ['general', 'fsa-explains', 'best-practice', 'tips', 'legal-advice', 'important'],
    control: {
      type: 'radio'
    },
  },
}

export const WithoutTitle = args => explanationBlock(args);
WithoutTitle.args = {
  type: 'general',
  wysiwyg_content: '<h4>Lorem ipsum</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tortor, pharetra tempor vehicula eu, sagittis nec odio. Suspendisse hendrerit nisi sed mi accumsan, sed tincidunt lacus volutpat.</p>',
}

export const WithTitle = args => explanationBlock(args);
WithTitle.args = {
  type: 'important',
  heading: 'Important',
  wysiwyg_content: '<h4>Lorem ipsum</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tortor, pharetra tempor vehicula eu, sagittis nec odio. Suspendisse hendrerit nisi sed mi accumsan, sed tincidunt lacus volutpat.</p>',
}

export const WithLink = args => explanationBlock(args);
WithLink.args = {
  type: 'fsa-explains',
  heading: 'FSA explains',
  wysiwyg_content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="#">This is a link</a> pharetra tempor vehicula eu, sagittis nec odio. <a class="external-link" href="#">This is an external link</a> Suspendisse hendrerit nisi sed mi accumsan, sed tincidunt lacus volutpat.</p>',
}

export const WithList = args => explanationBlock(args);
WithList.args = {
  type: 'best-practice',
  heading: 'Best practice',
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
}

export const WithFile = args => explanationBlock(args);
WithFile.args = {
  type: 'tips',
  heading: 'Tips',
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
}

export const Combination = args => explanationBlock(args);
Combination.args = {
  type: 'legal-advice',
  heading: 'Legal advice',
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
}