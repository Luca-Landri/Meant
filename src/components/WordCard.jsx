import React, { useState } from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import "../App.css";
import { useEffect } from 'react';
import { randomWord, definition } from '../app/app';



const WordCard = () => {
    const word = useSelector((state) => state.app.words)
    const def = useSelector((state) => state.app.def)
    const dispatch = useDispatch()
    const [Word, setWord] = useState(false)

    useEffect(() => {
        addWords()
    }
    , [])

    const addWords = () =>  {
        dispatch(randomWord()).then(res => {
            dispatch(definition(res.payload)).then(res => {
                console.log(res.payload[0].shortdef[0])
                setWord(true)
            }).catch(err => {
                console.log(err)
                setWord(false)
            })
        })
    }
    
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <h1>{word}</h1>
                </div>
                <div className="flip-card-back">
                    <h1>{word}</h1>
                    <h2>{Word ? def[0].shortdef[0] : null}</h2>
                </div>
            </div>
        </div>
    )
}

export default WordCard