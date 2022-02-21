import article from './articleSimple.html.twig';
import tableOfContents from "@components/components/article/TableOfContents/tableOfContents.html.twig";

export default {
  title: 'Pages/Article/Simple',
  parameters: {
    controls: { disabled: true },
    layout: 'fullscreen',
  },
};

const Template = (args) => {
  return article(args);
}

export const Simple =  Template.bind({});
Simple.args = {
  on_this_page:
    tableOfContents({
      title: 'on this page',
      links: [
        { label: 'Placing your product on the market in Great Britain', href: '#gb-market' },
        { label: 'Placing your product on the market in Northern Ireland', href: '#ni-market' },
      ],
      skip_menu_text: 'Skip the menu of subheadings',
    }),
}