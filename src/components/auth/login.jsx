
import React, { useEffect, useRef } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/LOGO.png'
import { login } from '../../store/actions/authService';
const Login = () => {
    const nameRef = useRef('')
    const passRef = useRef('')
    const navigate = useNavigate()
    const dispatch  = useDispatch()

    const hendleSubmit =() =>{
        let user = {};
        user.adminname = nameRef.current.value;
        user.password = passRef.current.value;
        dispatch(login(user))
    }

    const {loading,data,error} = useSelector(state => state.auth)

    console.log(data);
    
    useEffect(() =>{
       if(data?.token && data?.token !== null){
        localStorage.setItem('token',data.token)
        localStorage.setItem("r",JSON.stringify(data.role))
        navigate('/')
       }
    },[data])

  
    return (
        <div className='w-full top-0 left-0 bottom-0 fixed flex items-center justify-center bg-gray z-50'>
            <div className='w-96 p-5 flex flex-col items-center bg-white shadow-xl rounded-lg '>
                  <img className='w-28' src={logo} alt='logotip'/>
                  <p className='mt-5 text-xl text-grenn font-mono font-bold'>SCIENCE ADMIN</p>
                  <input ref={nameRef} className='w-full h-10 text-xl border-grenn border-b-2 outline-none mt-7 px-2' type="text" placeholder='Enter your name....' />
                  <input ref={passRef} className='w-full h-10 text-xl border-grenn border-b-2 outline-none mt-7 px-2' type="password" placeholder='Enter your password....'/>
                  <button onClick={hendleSubmit} className='w-36 mt-10 bg-grenn rounded-md text-white p-2   hover:opacity-70 active:bg-blue'>Login</button>
            </div>
        </div>
    );
}

export default Login;
