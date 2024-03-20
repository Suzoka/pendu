import { useRef } from 'react';
import Classes from './answer.module.css';

export const Answer = ({ newTry }) => {

    const inputRef = useRef(null);

    const sentForm = (e) => {
        e.preventDefault();
        if (inputRef.current.value.trim() != '') {
            newTry(inputRef.current.value.toLowerCase());
            inputRef.current.value = '';
        }
    }

    return (
        <form onSubmit={sentForm} className={Classes.try} autoComplete="off">
            <label htmlFor="lettre" className={Classes.label}>Essayer une lettre</label>
            <div>
                <input type="text" name="lettre" id="lettre" ref={inputRef} maxLength="1" className={Classes.tryElement}/>
                <button type="submit" className={Classes.sendTry}>Envoyer</button>
            </div>
        </form>
    )
}