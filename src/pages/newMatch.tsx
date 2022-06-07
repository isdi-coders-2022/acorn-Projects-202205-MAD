import { Form } from '../components/NewMatch.Form';
import { List } from '../components/NewMatch.List';

export function NewMatch() {
    const template = (
        <>
            <Form />
            <List />
        </>
    );
    return template;
}

export default NewMatch;
