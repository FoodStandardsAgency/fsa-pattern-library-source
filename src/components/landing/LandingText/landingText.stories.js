import landingText from './landingText.html.twig';
import './landingText.scss';

export default {
  title: 'Components/Landing/Text',
};

const Template = (args) => landingText(args);

export const Text = Template.bind({});
Text.args = {
  content:
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in commodo magna. Pellentesque habitant morbi\n' +
    '    tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n' +
    '<h3>[H3] Header </h3>\n' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in commodo magna. Pellentesque habitant morbi\n' +
    '    tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n' +
    '<h4>[H4] Header </h4>\n' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in commodo magna. Pellentesque habitant morbi\n' +
    '    tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n' +
    '<h5>[H5] Header </h5>\n' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in commodo magna. Pellentesque habitant morbi\n' +
    '    tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n' +
    '<h6>[H6] Header </h6>\n' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in commodo magna. Pellentesque habitant morbi\n' +
    '    tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n' +
    '\n' +
    '<h2>Text styles</h2>\n' +
    '<p>' +
    '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Nulla eget odio nisl. Sed iaculis metus felis, non' +
    '  dapibus nisl congue a.</b> Nam tempor, neque eu sodales vehicula, massa nisl maximus nibh, sit amet sagittis sem' +
    '  tellus sed urna. Morbi tristique elit at quam molestie, vel blandit mi iaculis. Sed ut venenatis' +
    '  tortor. Proin sed augue ut est luctus egestas a placerat est. Fusce efficitur pharetra odio quis venenatis.' +
    '</p>' +
    '\n' +
    '<h2>Ordered List</h2>\n' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n' +
    '<ol>\n' +
    '    <li><a href="#">Internal link</a></li>\n' +
    '    <li><a href="#">Internal link</a> - consectetur adipiscing elit</li>\n' +
    '    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n' +
    '    <li><a class="external-link" href="#">External link</a> habitant morbi tristique senectus et netus et malesuada\n' +
    '        fames ac turpis eges\n' +
    '    </li>\n' +
    '</ol>\n' +
    '<h2>Unordered list</h2>\n' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n' +
    '<ul>\n' +
    '    <li><a href="#">Internal link</a></li>\n' +
    '    <li><a href="#">Internal link</a> - consectetur adipiscing elit</li>\n' +
    '    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n' +
    '    <li><a class="external-link" href="#">External link</a> habitant morbi tristique senectus et netus et malesuada\n' +
    '        fames ac turpis eges\n' +
    '    </li>\n' +
    '</ul>\n',
};
