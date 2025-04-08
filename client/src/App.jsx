import './App.css'
import { Routes, Route } from 'react-router-dom';
import Container from "@/components/Container.jsx";
import Home from "@/pages/home/Index.jsx";
import NotFound from "@/pages/NotFound.jsx";
import SignIn from "@/pages/auth/SignIn.jsx";
import SignUp from "@/pages/auth/SignUp.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={
            <Container>
                <Home />
            </Container>
        } />
        <Route path='*' element={<NotFound />} />
        <Route path={'/auth/sign-in'} element={<SignIn />} />
        <Route path={'/auth/sign-up'} element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
