import {createContext, useContext, useEffect, useState} from "react";
import axios from "@/libs/axios.js"
import {useLocation, useNavigate, matchPath} from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const protectedRoutes = [
        '/profile',
        '/jobs',
        '/jobs/create',
        '/jobs/edit/:id',
        '/jobs/:id',
        '/applications',
        '/applications/:id',
    ]

    const authRoutes = ['/auth/sign-up', '/auth/sign-in'];

    const fetchUser = async () => {
        setLoading(true);

        try {
            const response = await axios.get('/users/me')
            setUser(response.data.user);
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

            if (isProtected && !user) {
                navigate("/auth/sign-in");
            }

            if (isAuth && user) {
                navigate("/jobs");
            }
        }
    }, [location.pathname, user, loading]);

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);