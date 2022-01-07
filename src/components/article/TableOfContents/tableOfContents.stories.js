import tableOfContents from './tableOfContents.html.twig';
import './tableOfContents.scss';

export default {
  title: 'Components/Article/Table of Contents',
};

export const TableOfContents = (args) => tableOfContents(args);
TableOfContents.storyName = 'Table of Contents';
TableOfContents.args = {
  title: 'on this page',
  links: [
    { label: 'Explaning hazards', href: '#' },
    { label: 'Food safety management procedures', href: '#' },
    { label: 'HACCP system in meat plants', href: '#' },
    { label: 'MyHACCP', href: '#' },
    { label: 'MyHACCP step by step', href: '#' },
    { label: 'Small business and retailers', href: '#' },
  ],
};
