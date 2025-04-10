import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import {AlertProvider} from "@/contexts/AlertContext.jsx";
import {AuthProvider} from "@/contexts/AuthContext.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <AlertProvider>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </AlertProvider>
        </BrowserRouter>
    </StrictMode>
)
