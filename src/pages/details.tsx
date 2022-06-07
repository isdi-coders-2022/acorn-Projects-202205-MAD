import { useParams } from 'react-router-dom';

export function Details() {
    const { id } = useParams();
    const template = (
        <>
            <p>Aqui los details de {id}</p>
        </>
    );
    return template;
}

export default Details;
