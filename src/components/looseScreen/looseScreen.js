import { Hangman } from "@/components/hangman/hangman"
import Classes from './looseScreen.module.css'

export const LooseScreen = ({ word }) => {
    return (
        <div>
            <h1 className={Classes.titre}>Vous avez perdu !</h1>
            <p className={Classes.text}>Le mot était : <span className={Classes.word}>{(word.charAt(0).toUpperCase() + word.slice(1)).replaceAll('-', ' ')}</span></p>
            <div className={Classes.hangman}>
                <Hangman state='11' />
            </div>
            <button className={Classes.bouton} onClick={() => window.location.reload()}>Rejouer</button>
        </div>
    )
}