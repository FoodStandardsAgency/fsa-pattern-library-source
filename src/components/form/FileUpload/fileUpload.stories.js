import fileUpload from './fileUpload.html.twig';
import './fileUpload.scss';

export default {
  title: 'Components/Form/File Upload',
  parameters: {
    controls: {
      disable: false,
    },
  },
};

const Template = (args) => {
  return fileUpload(args);
};

const defaultArgs = {
  title: '2. Please upload a digital copy of your flow diagram (or go to 3).',
  id: 'file-upload',
  name: 'file-upload-name',
  file_loading_label: 'Loading...',
  file_select_label: 'Choose a file',
  file_upload_label: 'Upload file',
  file_remove_label: 'Remove file',
  accept: ['.jpg', '.jpeg', '.png', '.gif', '.pdf'],
  tooltip: {
    open: 'Open tooltip',
    close: 'Close',
    message:
      'This allows you to save your diagram on-line and will present it in the output document. Allowed file types are: jpg, jpeg, png and pdf.',
  },
};

export const FileNotSelected = Template.bind({});
FileNotSelected.args = {
  ...defaultArgs,
  state: 'file-not-selected',
};

export const FileSelected = Template.bind({});
FileSelected.args = {
  ...defaultArgs,
  state: 'file-selected',
  file_name: 'file_name.jpg',
};

export const FileLoading = Template.bind({});
FileLoading.args = {
  ...defaultArgs,
  state: 'file-loading',
};

export const FileLoaded = Template.bind({});
FileLoaded.args = {
  ...defaultArgs,
  state: 'file-loaded',
  file_name: 'file_name.jpg',
};
