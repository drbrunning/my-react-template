/* eslint-disable linebreak-style */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

// Mock the store

test('renders login page.', () => {
    render(
        <Provider store={store}>
            <MemoryRouter>
                <App />
            </MemoryRouter>
        </Provider>
    );
    const linkElement = screen.getByText(/login/i);
    expect(linkElement).toBeInTheDocument();
});
