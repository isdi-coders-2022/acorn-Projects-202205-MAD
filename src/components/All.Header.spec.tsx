import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './All.Header';

describe('Given Home > Info component', () => {
    describe('When calling it', () => {
        test('It should render', () => {
            render(
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            );
            const labelInput = screen.getByAltText('logo');
            expect(labelInput).toBeInTheDocument();
        });
    });
});
