import React from 'react';
import { render, screen } from '@testing-library/react';
import UserDoc from '../index';

test('renders UserDoc', () => {
    render(<UserDoc />)
    const divElement = screen.getByText(/userDoc/i);
    expect(divElement).toBeInTheDocument();
})
