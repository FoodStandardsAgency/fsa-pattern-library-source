import webToolProgressBar from './webToolProgressBar.html.twig';
import './webToolProgressBar.scss';

export default {
  title: 'Components/HACCP/Web Tool Progress Bar',
};

export const WebToolProgressBar = (args) => webToolProgressBar(args);
WebToolProgressBar.args = {
  lines: [
    {
      label: 'Preparatory',
      steps: [
        {
          url: '#',
          label: 'Intro',
          state: 'completed',
        },
        {
          url: '#',
          label: 'A',
          description: 'Prerequisite food hygiene requirements',
          state: 'completed',
        },
        {
          url: '#',
          label: 'B',
          description: 'Obtain management commitment',
          state: 'completed',
        },
        {
          url: '#',
          label: 'C.1',
          description: 'Scope of the study',
          state: 'completed',
        },
        {
          url: '#',
          label: 'C.2',
          description: 'Scope of the study',
          state: 'completed',
        },
        {
          url: '#',
          label: 'D',
          description: 'Select the HACCP team',
          state: 'completed',
        },
        {
          url: '#',
          label: 'E',
          description: 'Describe the product',
          state: 'completed',
        },
        {
          url: '#',
          label: 'F',
          description: 'Identify intended use',
          state: 'completed',
        },
        {
          url: '#',
          label: 'G',
          description: 'Flow diagram',
          state: 'completed',
        },
        {
          url: '#',
          label: 'H',
          description: 'Confirm flow diagram',
          state: 'completed',
        },
        {
          url: '#',
          label: 'Review',
          state: 'completed',
        },
      ],
    },
    {
      label: 'Principles',
      steps: [
        {
          url: '#',
          label: 'Intro',
          state: 'completed',
        },
        {
          url: '#',
          label: '1.1',
          description: 'Identify and list potential hazards',
          state: 'completed',
        },
        {
          url: '#',
          label: '1.2',
          description: 'Conduct a hazard analysis',
          state: 'completed',
        },
        {
          url: '#',
          label: '1.3',
          description: 'Specify control measures',
          state: 'active',
        },
        {
          url: '#',
          label: '2.1',
          description: 'Determine critical control points (CCPs)',
          state: 'upcoming',
        },
        {
          url: '#',
          label: '2.2',
          description: 'Determine critical control points (CCPs)',
          state: 'upcoming',
        },
        {
          url: '#',
          label: '3',
          description: 'Establish critical limits',
          state: 'upcoming',
        },
        {
          url: '#',
          label: '4',
          description: 'Establish a monitoring system',
          state: 'upcoming',
        },
        {
          url: '#',
          label: '5',
          description: 'Establish corrective actions',
          state: 'upcoming',
        },
        {
          url: '#',
          label: '6',
          description: 'Validation, verification and review',
          state: 'upcoming',
        },
        {
          url: '#',
          label: '7',
          description: 'Establish documentation and records',
          state: 'upcoming',
        },
        {
          url: '#',
          label: 'Review',
          state: 'upcoming',
        },
      ],
    },
  ],
};
