import React from 'react'
import styled from 'styled-components'
import WordCard from './WordCard'
import { randomWord, definition } from '../app/app';
import { useSelector, useDispatch } from 'react-redux';




const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 3%;
`

const Title = styled.h1`
  font-size: 38px;
  font-family: "M PLUS Rounded 1c", sans-serif;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const WordCardGroup = () => {
  const word = useSelector((state) => state.app.words)
  const dispatch = useDispatch()

  
  return (
    <Container>
      <Title onClick={() => dispatch(randomWord())}>Daily Words 🌍</Title>
      <Row>
        {
          word.map((word, index) => {
            return <WordCard key={index} word={word} index={index}/>
          })
        }
      </Row>
    </Container>
  )
}

export default WordCardGroup