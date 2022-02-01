import stickySidebar from './stickySidebar.html.twig';
import './stickySidebar.scss';
import backTo from "../BackTo/backTo.html.twig";
import tableOfContents from "../TableOfContents/tableOfContents.html.twig";

export default {
  title: 'Components/Article/Sticky Sidebar',
};

const Template = (args) => stickySidebar(args);

export const StickySidebar = Template.bind({});
StickySidebar.args = {
  sidebar_items: [
    backTo({
      type: 'back_to',
      label: 'All alerts',
      url: '#',
    }),
    tableOfContents({
      type: 'table_of_contents',
      title: 'On this page',
      links: [
        { label: 'Explaning hazards', href: '#' },
        { label: 'Food safety management procedures', href: '#' },
        { label: 'HACCP system in meat plants', href: '#' },
        { label: 'MyHACCP', href: '#' },
        { label: 'MyHACCP step by step', href: '#' },
        { label: 'Small business and retailers', href: '#' },
      ],
    })
  ],
};
