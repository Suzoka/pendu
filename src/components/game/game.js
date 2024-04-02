'use client'
import Classes from './game.module.css';
import { useState, useEffect } from 'react';
import { Answer } from '@/components/answer/answer';
import { Hangman } from '@/components/hangman/hangman';
import { TryedLetters } from '@/components/tryedLetters/tryedLetters';
import { WinScreen } from '@/components/winScreen/winScreen';
import { LooseScreen } from '@/components/looseScreen/looseScreen';
import { LightDarkButton } from '@/components/lightDarkButton/lightDarkButton';

export const Game = ({ word }) => {

    const [tryedLetter, setTryedLetter] = useState([word[0]]);

    const generateDisplayedWord = () => {
        return word.split('').map((letter, index) => {
            if (letter == '-') {
                return <span className={Classes.letter} key={index}> </span>
            }
            if (tryedLetter.find(tryed => tryed == letter)) {
                return <span className={Classes.letter} key={index}>{letter.toUpperCase()}</span>
            }
            else {
                return <span className={Classes.letter} key={index}>_</span>
            }
        })
    }

    const [displayedWord, setDisplayedWord] = useState(generateDisplayedWord());

    const newTry = (letter) => {
        if (!tryedLetter.find(tryed => tryed == letter) && letter.match(/[a-zA-Z]/)) {
            setTryedLetter([...tryedLetter, letter].sort())
        }
    }

    useEffect(() => {
        setDisplayedWord(
            generateDisplayedWord()
        )
    }, [tryedLetter])


    if (!displayedWord.some(letter => letter.props.children == '_')) {
        return <WinScreen nbErreur={tryedLetter.filter((essaie) => word.indexOf(essaie) == -1).length} word={word} />
    }
    if (tryedLetter.filter((essaie) => word.indexOf(essaie) == -1).length >= 11) {
        return <LooseScreen word={word} />
    }
    return (
        <>
            <LightDarkButton />
            <h1 className={Classes.title}>Le jeu du pendu</h1>
            <p className={Classes.mot}>{displayedWord}</p>
            <Answer newTry={newTry} />
            <div className={Classes.flex}>
                <Hangman state={tryedLetter.filter((essaie) => word.indexOf(essaie) == -1).length} />
                <TryedLetters tryedLetters={tryedLetter} word={word} >{displayedWord}</TryedLetters>
            </div>
        </>
    )
}