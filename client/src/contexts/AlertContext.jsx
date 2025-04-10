import { createContext, useContext, useState } from 'react';

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(null)

    const showAlert = (message, success, duration = 2000) => {
        setAlert({message, success})
        setTimeout(() => {setAlert(null)}, duration)
    }

    return (
        <AlertContext.Provider value={{alert, showAlert}}>
            {children}
        </AlertContext.Provider>
    )
}

export const useAlert = () => useContext(AlertContext)