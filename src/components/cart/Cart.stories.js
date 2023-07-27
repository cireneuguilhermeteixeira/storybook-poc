import Cart from './Cart';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';


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

export const CartInteraction = {
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
  parameters: {
    a11y: {
      // This option disables all a11y checks on this story
      disable: true,
    },
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    
    const input = await canvas.getByTestId('my-cep');
    


    console.log(`input`, input);
    await userEvent.type(input, '60.455-610');


    const freteButton = await canvas.getByRole('button', {
      name: "Calcular frete"
    });
    
    // console.log(`freteButton`, freteButton);


    await userEvent.click(freteButton);
    
    
  },
  
};