import { Hangman } from "@/components/hangman/hangman"
import Classes from './winScreen.module.css'

export const WinScreen = ({ nbErreur, word }) => {
    return (
        <>
            <h1 className={Classes.titre}>Vous avez gagné en faisant {nbErreur} {nbErreur > 1 ? "erreurs" : "erreur"} !</h1>
            <p className={Classes.text}>Le mot était : <span className={Classes.word}>{(word.charAt(0).toUpperCase() + word.slice(1)).replaceAll('-', ' ')}</span></p>
            <Hangman state={nbErreur} />
            <button className={Classes.bouton} onClick={() => window.location.reload()}>Rejouer</button>
        </>
    )
}