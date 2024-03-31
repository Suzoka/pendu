import { Hangman } from "@/components/hangman/hangman"
import Classes from './looseScreen.module.css'

export const LooseScreen = ({word}) => {
    return (
        <div>
            <h1 className={Classes.titre}>Vous avez perdu !</h1>
            <p className={Classes.text}>Le mot était : {word.replaceAll('-', ' ')}</p>
            <div className={Classes.hangman}>
                <Hangman state={11}/>
            </div>
        </div>
    )
}