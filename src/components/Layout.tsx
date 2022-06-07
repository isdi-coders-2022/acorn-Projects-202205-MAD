import { ReactNode } from 'react';
import { Footer } from './All.Footer';
import { Header } from './All.Header';

export function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
