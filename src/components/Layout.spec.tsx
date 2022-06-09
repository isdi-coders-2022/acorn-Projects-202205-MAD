import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';

describe('Given Layout element', () => {
    describe('When calling it with a component children', () => {
        test('Then it should render it', () => {
            let MockComponent: () => JSX.Element;
            MockComponent = function () {
                return <>test component</>;
            };
            render(
                <BrowserRouter>
                    <Layout>
                        <MockComponent />
                    </Layout>
                </BrowserRouter>
            );
            const test1 = screen.getByText(/test component/i);
            expect(test1).toBeInTheDocument();
        });
    });
});
