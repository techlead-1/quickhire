import './App.css'
import { Routes, Route } from 'react-router-dom';
import Container from "@/components/Container.jsx";
import Home from "@/pages/home/Index.jsx";
import NotFound from "@/pages/NotFound.jsx";
import SignIn from "@/pages/auth/SignIn.jsx";
import SignUp from "@/pages/auth/SignUp.jsx";
import Alert from "@/components/Alert.jsx";
import {useState} from "react";
import {useAlert} from "@/contexts/AlertContext.jsx";
import JobsPage from "@/pages/jobs/JobsPage.jsx";

function App() {
    const { alert } = useAlert()

  return (
    <>
        {alert &&
            <Alert message={alert.message} success={alert.success} />
        }

      <Routes>
        <Route path='/' element={
            <Container>
                <Home />
            </Container>
        } />
        <Route path='*' element={<NotFound />} />
        <Route path={'/auth/sign-in'} element={<SignIn />} />
        <Route path={'/auth/sign-up'} element={<SignUp />} />
        <Route path={'/jobs'} element={<JobsPage />} />
      </Routes>
    </>
  )
}

export default App
