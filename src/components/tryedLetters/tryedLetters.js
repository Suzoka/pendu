import Classes from './tryedLetters.module.css';

export const TryedLetters = ({ tryedLetters, word }) => {
    return (
        <div className={Classes.tryedLetters}>
            <h2>Lettres fausses</h2>
            <div className={Classes.letters}>
                {tryedLetters.map((letter, index) => {
                    if (word.indexOf(letter) == -1) {
                        return <p key={index}>{letter.toUpperCase()}</p>
                    }
                })}
            </div>
        </div>
    )
}