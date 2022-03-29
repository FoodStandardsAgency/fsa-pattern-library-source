import webToolProgressBar from './webToolProgressBar.html.twig';
import './webToolProgressBar.scss';

export default {
  title: 'Components/Article/Web Tool Progress Bar',
};

// The custom callback for a step of progress bar.
// In Drupal implementation locate it in "Drupal.behaviors" namespace.
window.customPreparatoryIntroCallback = function() {
  alert('It is a custom callback.');
}

export const WebToolProgressBar = (args) => webToolProgressBar(args);
WebToolProgressBar.args = {
  lines: [
    {
      label: 'Preparatory',
      steps: [
        {
          url: '#',
          callback: 'customPreparatoryIntroCallback',
          label: 'Intro',
          state: 'completed',
        },
        {
          url: '#',
          label: 'A',
          state: 'completed',
        },
        {
          url: '#',
          label: 'B',
          state: 'completed',
        },
        {
          url: '#',
          label: 'C.1',
          state: 'completed',
        },
        {
          url: '#',
          label: 'C.2',
          state: 'completed',
        },
        {
          url: '#',
          label: 'D',
          state: 'completed',
        },
        {
          url: '#',
          label: 'E',
          state: 'completed',
        },
        {
          url: '#',
          label: 'F',
          state: 'completed',
        },
        {
          url: '#',
          label: 'G',
          state: 'completed',
        },
        {
          url: '#',
          label: 'H',
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
          state: 'completed',
        },
        {
          url: '#',
          label: '1.2',
          state: 'completed',
        },
        {
          url: '#',
          label: '1.3',
          state: 'active',
        },
        {
          url: '#',
          label: '2.1',
          state: 'upcoming',
        },
        {
          url: '#',
          label: '2.2',
          state: 'upcoming',
        },
        {
          url: '#',
          label: '3',
          state: 'upcoming',
        },
        {
          url: '#',
          label: '4',
          state: 'upcoming',
        },
        {
          url: '#',
          label: '5',
          state: 'upcoming',
        },
        {
          url: '#',
          label: '6',
          state: 'upcoming',
        },
        {
          url: '#',
          label: '7',
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
