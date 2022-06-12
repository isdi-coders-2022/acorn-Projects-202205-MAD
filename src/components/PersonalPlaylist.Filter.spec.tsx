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
        test('Then it should select options', () => {
            render(<Filter />);
            userEvent.selectOptions(
                screen.getByTestId('config__selector'),
                'soleado'
            );

            const option = screen.getByRole('option', {
                name: 'Soleado',
            }) as HTMLFormElement;
            const option2 = screen.getByRole('option', {
                name: 'Lluvia',
            }) as HTMLFormElement;

            expect(option.selected).toBe(true);
            expect(option2.selected).toBe(false);
        });
    });
});
