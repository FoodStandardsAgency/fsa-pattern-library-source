import contact from './contact.html.twig';

export default {
  title: 'Pages/Contact',
  parameters: {
    controls: {
      disable: true,
    },
    layout: 'fullscreen',
  },
};

export const Contact = () => {
  return contact();
};
