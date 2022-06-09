import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from './NewMatch.Form';

describe('Given NewMatch.Form', () => {
    describe('When it is used by a test', () => {
        test('Then it should render', () => {
            render(<Form />);

            const element = screen.getByText(/CLIMA/);
            expect(element).toBeInTheDocument();
        });
        test('Then it should weather selected if select button is changed', () => {
            render(<Form />);

            userEvent.selectOptions(
                screen.getByTestId('weather-config-match') as HTMLFormElement,
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
