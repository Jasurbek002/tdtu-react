import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthProvider = ({children}) => {
    
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    useEffect(() =>{
    if(!token) navigate('/login')
    },[navigate])


    return (<>{children} </>);}
export default AuthProvider;
