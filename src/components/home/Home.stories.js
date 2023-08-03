import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Home } from './Home';

export default {
  title: 'Example/Home',
  component: Home,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const LoggedOut = {};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedIn = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole('button', {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
    
    await expect(canvas.getByRole('button', {
      name: /Log out/i,
    })).toBeInTheDocument();
    
  },
};
