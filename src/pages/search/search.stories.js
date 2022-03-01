import search from './search.html.twig';

export default {
  title: 'Pages/Search',
  parameters: {
    controls: {
      disabled: true,
    },
    layout: 'fullscreen',
  },
};

export const Search = (args) => {
  return search(args);
};
