import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import { BrowserRouter } from "react-router-dom";


const MockSearchBar = () => {
    return (
        <BrowserRouter>
            <SearchBar />
        </BrowserRouter>
    )
}

test('updates input value on change', () => {
    render(<MockSearchBar />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'nature' } });
    expect(inputElement.value).toBe('nature');
});

test('calls navigate on form submit', () => {
    render(<MockSearchBar />);
    const inputElement = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /search/i });

    fireEvent.change(inputElement, { target: { value: 'nature' } });
    fireEvent.click(submitButton);

    expect(window.location.pathname).toBe('/tag/nature');
});