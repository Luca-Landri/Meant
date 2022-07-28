import React, { useState } from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import "../App.css";
import { useEffect } from 'react';
import { randomWord, definition } from '../app/app';


const FlipCard = styled.div`
    background-color: transparent;
    width: 330px;
    height: 300px;
    perspective: 1000px;
    margin-right: 50px;
    
`

const CardFront = styled.div`
    background-color: #bbb;
    color: #fff;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-family: "M PLUS Rounded 1c", sans-serif;
    background: rgb(135, 140, 244);
    background: linear-gradient(90deg, rgba(135, 140, 244, 1) 0%, rgba(89, 95, 209, 1) 100%, rgba(173, 201, 8, 0.30155812324929976) 100%);
    box-shadow: -0.713381px 17.9859px 47px rgba(51, 38, 174, 0.13), -0.361149px 9.10534px 20.4891px rgba(51, 38, 174, 0.08775), -0.142676px 3.59717px 7.6375px rgba(51, 38, 174, 0.065), -0.0312104px 0.786881px 2.71719px rgba(51, 38, 174, 0.04225);
    p {
        color: #fff;
        opacity: 0.6;
        font-size: 18px;
    }

`

const CardBack = styled.div`
    background: rgb(123,98,187);
    background: linear-gradient(90deg, rgba(123,98,187,1) 0%, rgba(223,90,114,1) 100%, rgba(173,201,8,0.30155812324929976) 100%);
    color: white;
    transform: rotateY(180deg);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: -0.713381px 17.9859px 47px rgba(51, 38, 174, 0.13), -0.361149px 9.10534px 20.4891px rgba(51, 38, 174, 0.08775), -0.142676px 3.59717px 7.6375px rgba(51, 38, 174, 0.065), -0.0312104px 0.786881px 2.71719px rgba(51, 38, 174, 0.04225);

    h1 {
        font-size: 25px;
        font-family: "M PLUS Rounded 1c", sans-serif;
    }

    h2 {
        font-size: 15px;
        font-family: "M PLUS Rounded 1c", sans-serif;
    }
`

const CardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.5s;
    transform-style: preserve-3d; 
`


const WordCard = ({word, index}) => {
    const dispatch = useDispatch()
    const def = useSelector((state) => state.app.def)

    dispatch(definition(word))
        // dispatch(randomWord()).then(res => {
        //     dispatch(definition(res.payload)).then(res => {
        //         console.log(res.payload[0].shortdef[0])
        //         setWord(true)
        //     }).catch(err => {
        //         console.log(err)
        //         setWord(false)
        //     })
        // })

    return (
        <FlipCard className="flip-card">
            <CardInner className="flip-card-inner">
                <CardFront className="flip-card-front">
                    <h1>{word}</h1>
                    <p>Hover this card for the meaning</p>
                </CardFront>
                <CardBack className="flip-card-back">
                    <h1>{word}</h1>
                    <h2>{def[index][0].shortdef[0]}</h2>
                </CardBack>
            </CardInner>
        </FlipCard>
    )
}

export default WordCard