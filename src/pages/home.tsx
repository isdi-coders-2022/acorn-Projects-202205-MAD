import './home.css';
import { Info } from '../components/Home.Info';
import { Configuration } from '../components/Home.Configuration';
export function Home() {
    const template = (
        <>
            <Info />
            <Configuration />
        </>
    );
    return template;
}
