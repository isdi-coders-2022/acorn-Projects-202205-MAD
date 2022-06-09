import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Filter } from './PersonalPlaylist.Filter';

describe('Given the Filter component', () => {
    describe('When calling it', () => {
        test('It should render', () => {
            render(<Filter />);
            const test1 = screen.getByRole('combobox');
            expect(test1).toBeInTheDocument();
        });
    });
    describe('When the select item is changed', () => {
        test('Then handleChange function should be called', () => {
            Filter.prototype.handleChange = jest.fn();
            render(<Filter />);
            userEvent.selectOptions(screen.getByRole('combobox'), 'Soleado');
            userEvent.selectOptions(
                screen.getByRole('combobox'),
                '--Selecciona un clima--'
            );
            expect(Filter.prototype.handleChange).toHaveBeenCalled();
        });
    });
});
