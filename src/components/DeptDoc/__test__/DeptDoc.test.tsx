import React from 'react';
import { render, screen } from '@testing-library/react';
import DeptDoc from '../index';

test('renders DeptDoc', () => {
    render(<DeptDoc />)
    const divElement = screen.getByText(/Primary Button/i);
    expect(divElement).toBeInTheDocument();
})
