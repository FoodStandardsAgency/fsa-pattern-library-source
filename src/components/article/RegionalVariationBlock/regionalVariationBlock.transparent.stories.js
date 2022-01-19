import regionalVariationBlock from './regionalVariationBlock.html.twig';
import './regionalVariationBlock.scss';

export default {
  title: 'Components/Article/Regional Variation Block/Transparent',
}

export const WithoutDocumentDownload = args => regionalVariationBlock(args);
WithoutDocumentDownload.args = {
  region: ['England'],
  wysiwyg_content: '<a href="#">Contact your local council in England</a> to apply for registration as a childminder if you provide food with your childminding business',
  transparent_background: true,
}

export const WithDocumentDownload = args => regionalVariationBlock(args);
WithDocumentDownload.args = {
  region: ['Wales'],
  wysiwyg_content: '<a href="#">Contact your local council in England</a> to apply for registration as a childminder if you provide food with your childminding business',
  transparent_background: true,
  files: [
    {
      format: 'word',
      link: '#',
      view: 'View',
      name: 'Step by step guide for meat approvals application',
      as: 'as',
      new_window: 'Open in a new window',
      size: '559.42 KB',
    },
  ],
}

export const WithMultipleDocumentDownloads = args => regionalVariationBlock(args);
WithMultipleDocumentDownloads.args = {
  region: ['Northern Ireland'],
  wysiwyg_content: '<a href="#">Contact your local council in England</a> to apply for registration as a childminder if you provide food with your childminding business',
  transparent_background: true,
  files: [
    {
      format: 'word',
      link: '#',
      view: 'View',
      name: 'Step by step guide for meat approvals application',
      as: 'as',
      new_window: 'Open in a new window',
      size: '559.42 KB',
    },
    {
      format: 'pdf',
      link: '#',
      view: 'View',
      name: 'Safer food, better business - Introduction',
      as: 'as',
      new_window: 'Open in a new window',
      size: '1.09 MB',
    },
    {
      format: 'jpeg',
      link: '#',
      view: 'View',
      name: 'Safer food, better business - diary refill 4-weekly review',
      as: 'as',
      new_window: 'Open in a new window',
      size: '858.14 KB',
    },
  ],
}

export const WithMultipleRegions = args => regionalVariationBlock(args);
WithMultipleRegions.args = {
  region: ['England','Wales', 'Northern Ireland'],
  wysiwyg_content: '<a href="#">Contact your local council in England</a> to apply for registration as a childminder if you provide food with your childminding business',
  transparent_background: true,
}