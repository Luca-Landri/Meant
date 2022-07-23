import React from 'react'
import styled from 'styled-components'
import WordCard from './WordCard'


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
  return (
    <Container>
      <Title>Daily Words 🌍</Title>
      <Row>
        <WordCard />
        <WordCard />
        <WordCard />
      </Row>
    </Container>
  )
}

export default WordCardGroup