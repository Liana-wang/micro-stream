import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomDoc from '../index';

test('renders CustomDoc', () => {
    render(<CustomDoc />)
    const divElement = screen.getByText(/CustomDo/i);
    expect(divElement).toBeInTheDocument();
})
