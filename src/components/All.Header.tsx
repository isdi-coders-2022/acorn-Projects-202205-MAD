import { Link } from 'react-router-dom';
import { Navigation } from './All.Navigation';

export function Header() {
    return (
        <header>
            <div className="header">
                <Link to="/home">
                    <img id="logo" src="/img/logo.png" alt="logo" />
                </Link>
                <Navigation />
            </div>

            <div className="line"></div>
        </header>
    );
}
