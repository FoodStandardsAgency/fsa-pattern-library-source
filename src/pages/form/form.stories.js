import form from './form.html.twig';

export default {
  title: 'Pages/Form',
  parameters: {
    controls: { disabled: true },
    layout: 'fullscreen',
  },
};

export const Form = () => {
  return form();
};
