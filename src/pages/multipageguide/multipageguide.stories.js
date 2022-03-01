import multipageguide from './multipageguide.html.twig';
import tableOfContents from '@components/components/article/TableOfContents/tableOfContents.html.twig';

export default {
  title: 'Pages/Multipage Guide',
  parameters: {
    controls: { disabled: true },
    layout: 'fullscreen',
  },
};

const Template = (args) => {
  return multipageguide(args);
};

export const MultipageGuide = Template.bind({});
MultipageGuide.args = {
  in_this_guide: tableOfContents({
    title: 'in this guide',
    links: [
      { label: 'Guidance summary', href: '#' },
      { label: 'Introduction', href: '#' },
      { label: 'Requirements and overview of cooking methods', href: '#' },
      { label: 'Sous vide cooking method', href: '#' },
      { label: 'Sear and shave method', href: '#' },
      { label: 'Source control method', href: '#' },
    ],
    skip_menu_text: 'Skip the menu of subheadings',
  }),
  on_this_page: tableOfContents({
    title: 'on this page',
    links: [
      { label: 'Intended audience', href: '#' },
      { label: 'Purpose of the guidance', href: '#' },
      { label: 'Legal status of the guidance', href: '#' },
    ],
    skip_menu_text: 'Skip the menu of subheadings',
  }),
};
