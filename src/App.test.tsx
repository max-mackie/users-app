import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Create a mock store with redux-mock-store
const mockStore = configureMockStore();

// Initial state reflecting the expected Redux state shape
const initialState = {
  allUser: {
    users: [],
    isLoading: false,
    isSuccessful: false,
    error: { message: '' },
  },
};
const store = mockStore(initialState);

// Test for verifying the home page title is rendered
test('renders home page title', async () => {
  render(
    <Provider store={store}> {/* Provide Redux store context */}
      <BrowserRouter> {/* Provide routing context */}
        <App />
      </BrowserRouter>
    </Provider>
  );

  // Asynchronously wait for the text to appear to handle dynamic content
  const title = await screen.findByText("Meet The Team");
  expect(title).toBeInTheDocument();
});