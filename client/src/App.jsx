import './App.css'
import {BrowserRouter, Router, Route, Routes} from "react-router";
import Home from "./pages/Home.jsx";
import Auth from "./pages/Auth.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  )
}

export default App
