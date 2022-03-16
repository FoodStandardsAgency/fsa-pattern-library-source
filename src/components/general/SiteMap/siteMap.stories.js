import siteMap from './siteMap.html.twig';
import './siteMap.scss';

export default {
  title: 'Components/General/Site Map',
  parameters: {
    layout: 'fullscreen',
  },
};

export const SiteMap = (args) => siteMap(args);

SiteMap.args = {
  links: [
    {
      label: 'Introduction to MyHACCP',
      href: '#',
    },
    {
      label: 'Implementation of MyHACCP',
      href: '#',
    },
    {
      label: 'Preparatory Stages',
      href: '#',
      links: [
        {
          label: 'Preparatory Stage A: Prerequisite food hygiene requirements',
          href: '#',
        },
        {
          label: 'Preparatory Stage B: Obtain Management Commitment',
          href: '#',
        },
        {
          label: 'Preparatory Stage C: Scope of the study',
          href: '#',
        },
      ],
    },
    {
      label: 'HACCP Principles',
      href: '#',
      links: [
        {
          label: 'Principle 1.1: Identify and list potential hazards',
          href: '#',
        },
        {
          label: 'Principle 1.2: Conduct a hazard analysis',
          href: '#',
        },
        {
          label: 'Principle 1.3: Specify the control measures for each hazard',
          href: '#',
        },
      ],
    },
    {
      label: 'Glossary',
      href: '#',
    },
    {
      label: 'Resources',
      href: '#',
    },
    {
      label: 'FAQ',
      href: '#',
    },
    {
      label: 'Updates',
      href: '#',
    },
  ],
};
