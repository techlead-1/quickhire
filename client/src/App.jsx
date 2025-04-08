import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from "@/pages/home/Index.jsx";
import NotFound from "@/pages/NotFound.jsx";
import SignIn from "@/pages/auth/SignIn.jsx";
import SignUp from "@/pages/auth/SignUp.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path={'/auth/sign-in'} element={<SignIn />} />
        <Route path={'/auth/sign-up'} element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
