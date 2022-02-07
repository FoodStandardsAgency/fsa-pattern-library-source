import error403 from './error403.html.twig';
import error403WithArchive from './error403WithArchive.html.twig'

export default {
  title: 'Pages/Error/Error 403',
  parameters: {
    controls: { disabled: true },
    layout: 'fullscreen',
  },
};

export const Error403 = () => {
  return error403();
};

export const Error403WithArchive = () => {
  return error403WithArchive();
};