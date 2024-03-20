import Classes from './hangman.module.css';

export const Hangman = ({ state }) => {
    return (
        <div className={Classes.hangman}>
            <img src={`./assets/img/hangman${state}.png`} alt="hangman" />
        </div>
    )
}