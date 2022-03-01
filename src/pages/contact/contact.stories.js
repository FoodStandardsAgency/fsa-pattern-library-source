import contact from './contact.html.twig';

export default {
  title: 'Pages/Contact',
  parameters: {
    controls: {
      disabled: true,
    },
    layout: 'fullscreen',
  },
};

export const Contact = () => {
  return contact();
};
