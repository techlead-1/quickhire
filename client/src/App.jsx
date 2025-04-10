import './App.css'
import { Routes, Route } from 'react-router-dom';
import Container from "@/components/Container.jsx";
import Home from "@/pages/home/Index.jsx";
import NotFound from "@/pages/NotFound.jsx";
import SignIn from "@/pages/auth/SignIn.jsx";
import SignUp from "@/pages/auth/SignUp.jsx";
import Alert from "@/components/Alert.jsx";
import {useAlert} from "@/contexts/AlertContext.jsx";
import JobsPage from "@/pages/jobs/JobsPage.jsx";
import JobsForm from "@/pages/jobs/JobsForm.jsx";
import ShowJobs from "@/pages/jobs/ShowJobs.jsx";
import EditProfile from "@/pages/profile/EditProfile.jsx";
import ApplicationsPage from "@/pages/applications/ApplicationsPage.jsx";
import ShowApplications from "@/pages/applications/ShowApplications.jsx";
import AppLayout from "@/components/AppLayout.jsx";
import { useAuth } from "@/contexts/AuthContext.jsx";
import Skeleton from "@/components/Skeleton.jsx";

function App() {
    const { alert } = useAlert()
    const { loading } = useAuth()

    if (loading) {
        return (
            <Skeleton />
        );
    }

  return (
    <>
        {alert &&
            <Alert message={alert.message} success={alert.success} />
        }

      <Routes>
          <Route path='/' element={<Container> <Home /> </Container>} />
          <Route path={'/auth/sign-in'} element={<SignIn />} />
          <Route path={'/auth/sign-up'} element={<SignUp />} />
          <Route path='/profile' element={<AppLayout> <EditProfile /> </AppLayout>} />
          <Route path='/jobs' element={<AppLayout> <JobsPage /> </AppLayout>} />
          <Route path='/jobs/create' element={<AppLayout> <JobsForm /> </AppLayout>} />
          <Route path='/jobs/edit/:id' element={<AppLayout> <JobsForm /> </AppLayout>} />
          <Route path='/jobs/:id' element={<AppLayout> <ShowJobs /> </AppLayout>} />
          <Route path='/applications' element={<AppLayout> <ApplicationsPage /> </AppLayout>} />
          <Route path='/applications/:id' element={<AppLayout> <ShowApplications /> </AppLayout>} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
