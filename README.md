Your task is to develop a Proof of Concept (POC) for a simple e-commerce web application using Storybook 7. This application is broken down into a handful of components that you are expected to build and thoroughly test using Storybook's diverse testing capabilities.

Components to Create
ProductCard: This component displays the product's image, name, price, and a "Add to Cart" button. Use a static dataset to simulate a collection of products.

Cart: This component shows the products added to the cart. It should display the product name, price, and a button to remove the product from the cart.

CheckoutButton: This button initiates the checkout process.

NavBar: This component includes navigation links for "Home", "Cart", "Checkout", and "Logout".

Tests to Implement
For each component, you need to write different types of tests as specified below:

Spot Tests
Create stories for each component, simulating different states. Develop scenarios like an empty cart, a cart with one product, a cart with multiple products, etc.

Visual Tests
Implement visual testing with Storybook's addon to catch any visual regressions. Create baseline images, and for every change, compare the new state with the baseline.

Interaction Tests
Simulate user behavior for each component. Perform events like clicking the "Add to Cart" button, removing an item from the Cart, navigating through the NavBar, and clicking the CheckoutButton.

Accessibility Tests
Perform accessibility tests using the @storybook/addon-a11y to ensure that your components meet WCAG standards and are ARIA compatible.

Snapshot Tests
Implement snapshot testing for the DOM markup of each component to detect any regressions in the DOM structure and content when changes are made.

Reuse Tests
Reuse your stories across different testing tools like Jest, Mocha, etc., to conduct unit tests, integration tests, and more.