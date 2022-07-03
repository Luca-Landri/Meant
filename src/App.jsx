import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Login';
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 2.5rem;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    margin: 0;
    color: white;
`

function App() {

  return (
    <div className="App">
      <Title>LANDRIGRAM</Title>
      <Routes>
          <Route path="/" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
