import textBlock from './textBlock.html.twig';
import './textBlock.scss';

export default {
  title: 'Components/Article/Text Block',
};

const Template = (args) => textBlock(args);

export const TextBlock = Template.bind({});
TextBlock.args = {
  content:
    '<h2>[H2] Header </h2>\n' +
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
    '</ul>\n' +
  '  <h2>Results</h2>\n' +
      '  <p>The average overall percentage levels of campylobacter in the retailers’ data can be found in the table below.</p>\n' +
    '  <table>\n' +
    '  <caption>Campylobacter levels</caption>' +
    '    <thead>\n' +
    '    <tr>\n' +
    '      <th scope="col">Contamination levels</th>\n' +
    '      <th scope="col">July-September 2017</th>\n' +
    '      <th scope="col">October-December 2017</th>\n' +
    '      <th scope="col">January-March 2018</th>\n' +
    '      <th scope="col">April-June 2018</th>\n' +
    '    </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '    <tr>\n' +
    '      <th scope="row">cfu/g less than 10</th>\n' +
    '      <td>48.7%</td>\n' +
    '      <td>57.7%</td>\n' +
    '      <td>59.1%</td>\n' +
    '      <td>60.6%</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <th scope="row">cfu/g 10-99</th>\n' +
    '      <td>28.3%</td>\n' +
    '      <td>22.0%</td>\n' +
    '      <td>23.9%</td>\n' +
    '      <td>23.3%</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <th scope="row">cfu/g 100-1000</th>\n' +
    '      <td>18.4%</td>\n' +
    '      <td>16.7%</td>\n' +
    '      <td>13.2%</td>\n' +
    '      <td>12.5%</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <th scope="row">cfu/g over 1000</th>\n' +
    '      <td>4.6%</td>\n' +
    '      <td>3.6%</td>\n' +
    '      <td>3.8%</td>\n' +
    '      <td>3.7%</td>\n' +
    '    </tr>\n' +
    '    </tbody>\n' +
    '  </table>\n',
};
