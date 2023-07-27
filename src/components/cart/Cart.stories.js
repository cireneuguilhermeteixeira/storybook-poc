import { within, userEvent } from '@storybook/testing-library';

import Cart from './Cart';

export default {
  title: 'Example/Cart',
  component: Cart,
  parameters: {
    layout: 'fullscreen',
  },
};


export const CartNormal = {
  args: {
    cart: {
      products: [
        {
          id: 1,
          name: "Product 1",
          quantity: 1,
          price: 20,
        },
        {
          id: 2,
          name: "Product 2",
          quantity: 4,
          price: 50,
        },
      ]
    }
  },
  
};