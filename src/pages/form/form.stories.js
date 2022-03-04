import form from './form.html.twig';

export default {
  title: 'Pages/Form',
  parameters: {
    controls: { disable: true },
    layout: 'fullscreen',
  },
};

export const Form = () => {
  return form();
};
