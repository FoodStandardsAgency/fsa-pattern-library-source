import contentMetaData from './contentMetaData.html.twig';
import './contentMetaData.scss';

export default {
  title: 'Components/Article/Content Meta Data',
};

const Template = (args) => contentMetaData(args);

export const English = Template.bind({});
English.args = {
  meta_data: [
    {
      label: 'Research programme',
      content: 'Food allergy and intolerance research',
      url: '#',
    },
    {
      label: 'Study duration',
      content: 'January 2010 to March 2010',
    },
    {
      label: 'Project code',
      content: 'T07063',
    },
    {
      label: 'Conducted by',
      content: 'Jigsaw Research',
    },
  ],
};

export const Welsh = Template.bind({});
Welsh.args = {
  meta_data: [
    {
      label: 'Rhaglen ymchwil',
      content: 'Food allergy and intolerance research',
      url: '#',
    },
    {
      label: 'Hyd yr astudiaeth',
      content: 'Ionawr 2010 to Mawrth 2010',
    },
    {
      label: 'Cod prosiect',
      content: 'T07063',
    },
    {
      label: 'Cynhaliwyd gan',
      content: 'Jigsaw Research',
    },
  ],
};
