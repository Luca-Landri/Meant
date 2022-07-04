import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Login';
import Homepage from './components/Homepage';
import Register from './components/Register';

function App() {

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/app" element={<Homepage/>}/>
          <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
