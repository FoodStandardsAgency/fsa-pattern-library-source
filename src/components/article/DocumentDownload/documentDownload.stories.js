import documentDownload from './documentDownload.html.twig';
import multipleDocumentDownload from './multipleDocumentDownload.html.twig';
import './documentDownload.scss';

export default {
  title: 'Components/Article/Document Download',
};

const Template = (args) => documentDownload(args);

export const WithoutRegion = Template.bind({});
WithoutRegion.args = {
  format: 'word',
  link: '#',
  view: 'View',
  name: 'Step by step guide for meat approvals application',
  as: 'as',
  new_window: 'Open in a new window',
  size: '559.42 KB',
};

export const WithOneRegion = Template.bind({});
WithOneRegion.args = {
  ...WithoutRegion.args,
  region: [
    {
      class: 'England',
      string: 'England',
    }
  ],
  format: 'pdf',
};

export const WithMultipleRegions = Template.bind({});
WithMultipleRegions.args = {
  ...WithoutRegion.args,
  region: [
    {
      class: 'England',
      string: 'England',
    },
    {
      class: 'Wales',
      string: 'Wales',
    },
    {
      class: 'Northern Ireland',
      string: 'Northern Ireland',
    },
  ],
}

export const Translated = Template.bind({});
Translated.args = {
  ...WithoutRegion.args,
  region: [
    {
      class: 'England',
      string: 'Lloegr',
    }
  ],
}

export const TranslatedMultipleRegions = Template.bind({});
TranslatedMultipleRegions.args = {
  ...WithoutRegion.args,
  region: [
    {
      class: 'England',
      string: 'Lloegr',
    },
    {
      class: 'Wales',
      string: 'Cymru',
    },
    {
      class: 'Northern Ireland',
      string: 'Gogledd Iwerddon',
    },
  ],
}

export const List = () => multipleDocumentDownload();