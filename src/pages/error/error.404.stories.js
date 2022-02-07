import error404 from './error404.html.twig';

export default {
  title: 'Pages/Error/Error 404',
  parameters: {
    controls: { disabled: true },
    layout: 'fullscreen',
  },
};

export const Error404 = () => {
  return error404();
};