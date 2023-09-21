import { render, screen } from '@testing-library/react';

import App from '../App'; // Replace with the correct import path

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initialValue: any) => [initialValue, jest.fn()]
}));

describe('App component', () => {
  it('renders the component with initial count value', () => {
    const { getByText } = render(<App />);

    // Check if the button element with text "count is 0" exists
    const countElement = getByText('count is 0');
    expect(countElement).toBeTruthy();
  });

  it('renders the Vite and React logos with correct alt text', () => {
    render(<App />);

    // Check if the Vite logo is present with the correct alt text
    const viteLogoElement = screen.getByAltText('Vite logo');
    expect(viteLogoElement).toBeTruthy();

    // Check if the React logo is present with the correct alt text
    const reactLogoElement = screen.getByAltText('React logo');
    expect(reactLogoElement).toBeTruthy();
  });

  it('renders the "Click on the Vite and React logos to learn more" text', () => {
    render(<App />);

    // Check if the specific text is present in the component
    const learnMoreTextElement = screen.getByText('Click on the Vite and React logos to learn more');
    expect(learnMoreTextElement).toBeTruthy();
  });
});
