import {createContext, useContext, useEffect, useState} from "react";
import axios from "@/libs/axios.js"
import {useLocation, useNavigate, matchPath} from "react-router-dom";
import {useAlert} from "@/contexts/AlertContext.jsx";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(undefined);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const {showAlert}= useAlert();
    const protectedRoutes = [
        '/profile',
        '/jobs',
        '/jobs/create',
        '/jobs/edit/:id',
        '/jobs/:id',
        '/applications',
        '/applications/:id',
    ]
    const employerOnlyRoutes = [
        '/jobs/create',
        '/jobs/edit/:id',
    ]

    const authRoutes = ['/auth/sign-up', '/auth/sign-in'];

    const fetchUser = async () => {
        setLoading(true);

        try {
            const response = await axios.get('/users/me')
            setUser(response.data.data.user);
        } catch (err) {
            console.error(err);
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])

    useEffect(() => {
        if (!loading) {
            const isProtected = protectedRoutes.some((path) =>
                matchPath(path, location.pathname)
            );
            const isAuth = authRoutes.includes(location.pathname);

            if (isAuth && user) {
                showAlert('You are logged in!', true);
                navigate("/jobs");
            }

            if (isProtected && !user) {
                showAlert('You are logged out!', false);
                navigate("/auth/sign-in");
            }
            
            const isDenied = user && user.role === 'job-seeker' && employerOnlyRoutes.some((path) =>
                matchPath(path, location.pathname)
            );

            // job seeker trying to access employer only route
            if (isDenied) {
                showAlert('Access denied, employer only area', false);
                navigate('/jobs');
            }
        }
    }, [location.pathname, user, loading]);

    return (
        <AuthContext.Provider value={{ user, loading, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
