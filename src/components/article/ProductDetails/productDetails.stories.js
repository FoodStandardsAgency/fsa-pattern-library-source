import productDetails from './productDetails.html.twig';
import './productDetails.scss';

export default {
  title: 'Components/Article/Product Details',
};

export const ProductDetails = (args) => productDetails(args);
ProductDetails.args = {
  title: 'Product details',
  products: [
    {
      product_name: 'Kirsty’s Mini Classic Beef Lasagne',
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
    },
    {
      product_name: 'Kirsty’s Classic Beef Lasagne',
      rows: [
        {
          label: 'Pack size',
          content: '400g',
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
    },
  ],
};
