import landingBasic from './landingBasic.html.twig';

export default {
  title: 'Pages/Landing/Basic',
  parameters: {
    controls: {
      disabled: true,
    },
    layout: 'fullscreen',
  }
};

export const Basic = ({ label, ...args }) => {
  return landingBasic(args);
}

