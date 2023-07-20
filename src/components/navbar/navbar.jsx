import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss'
import {AiOutlineLogout, AiOutlineUser, AiOutlineZoomOut } from 'react-icons/ai';
const Navbar = () => {
  const logOut = () =>{
    window.localStorage.removeItem('token')
    window.location.replace('/login')
  }
    return (
        <div className={styles.Navbar}>
          <div className={styles.Navbar__user}>
                 <p>Supper Admin</p>
                 <AiOutlineUser  color='white' size={30} />
          </div>
          <button
          onClick={logOut}
          className='bg-blue rotate-180'>
            <AiOutlineLogout color='white' size={50} />
          </button>
        </div>
    );
}

export default Navbar;
