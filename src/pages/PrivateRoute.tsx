import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Navigate, } from "react-router-dom"

interface InputProviderProps {
    children: React.ReactNode
}


const PrivateRoute = ({ children }: InputProviderProps): any => {
    const { isAuthenticated, user } = useAuth0();
    const isUser = isAuthenticated && user
    if (!isUser) {
        return <Navigate to="/login" />
    }
    return children
}

export default PrivateRoute
