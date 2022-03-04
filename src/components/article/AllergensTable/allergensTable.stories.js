import allergensTable from './allergensTable.html.twig';
import './allergensTable.scss';

export default {
  title: 'Components/Article/Allergens Table',
  parameters: {
    docs: {
      description: {
        component: 'This table is specific to the alert content type and the product details component.' +
        'For a more flexible table, see the example in the TextBlock component `Components/Article/Text Block`.',
      },
    },
  }
};

export const AllergensTable = (args) => allergensTable(args);
AllergensTable.args = {
  product_name: 'Kirsty’s Classic Beef Lasagne',
  rows: [
    {
      label: 'Pack size',
      content: '250g',
    },
    {
      label: 'Use by',
      content: 'all dates between 2 September to 19 October 2020',
    },
    {
      label: 'Allergens',
      content: 'Gluten (oats)',
    },
  ],
};
