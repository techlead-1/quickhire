import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from "@/pages/home/Index.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
