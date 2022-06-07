import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer>
            <h3>CREATORS</h3>
            <div>
                <h4>Rodrigo Calvo</h4>
                <ul>
                    <li>
                        <Link to="/courses?sort=name">
                            <img src="./img/github.png" alt="github" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/courses?sort=name">
                            <img src="./img/linkedin.png" alt="linkedin" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/courses?sort=name">
                            <img src="./img/instagram.png" alt="instagram" />
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <h4>Fran Lobo</h4>
                <ul>
                    <li>
                        <Link to="/courses?sort=name">
                            <img src="./img/github.png" alt="github" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/courses?sort=name">
                            <img src="./img/linkedin.png" alt="linkedin" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/courses?sort=name">
                            <img src="./img/instagram.png" alt="instagram" />
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <h4>Adrian Calero</h4>
                <ul>
                    <li>
                        <Link to="/courses?sort=name">
                            <img src="./img/github.png" alt="github" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/courses?sort=name">
                            <img src="./img/linkedin.png" alt="linkedin" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/courses?sort=name">
                            <img src="./img/instagram.png" alt="instagram" />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}