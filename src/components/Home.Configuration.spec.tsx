import { render, screen } from '@testing-library/react';
import { Configuration } from './Home.Configuration';

describe('Given Home > Info component', () => {
    describe('When calling it', () => {
        test('It should render', () => {
            render(<Configuration />);
            const labelInput = screen.getByRole('textbox');
            expect(labelInput).toBeInTheDocument();
        });
    });
});

describe('Given Home > Info component', () => {
    describe('When calling it', () => {
        test('It should render', () => {
            render(<Configuration />);
            const labelInput = screen.getByRole('combobox');
            expect(labelInput).toBeInTheDocument();
        });
    });
});

describe('Given Home > Info component', () => {
    describe('When calling it', () => {
        test('It should render', () => {
            render(<Configuration />);
            const labelInput = screen.getByRole('button');
            expect(labelInput).toBeInTheDocument();
        });
    });
});
