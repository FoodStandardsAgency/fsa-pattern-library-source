import dropdownMenu from './dropdownMenu.html.twig';
import './dropdownMenu.js';

export default {
  title: 'Components/General/Dropdown Menu',
};

const Template = (args) => {
  return dropdownMenu(args);
};

export const DropdownMenu = Template.bind({});
DropdownMenu.args = {
  label: 'All options',
  options: [{
    url: '#',
    label: 'Download',
  },{
    url: '#',
    label: 'Copy',
  },
    {
      url: '#',
      label: 'Delete',
    }],
};
