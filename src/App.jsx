import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header';


function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
