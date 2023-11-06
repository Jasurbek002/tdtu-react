import React from 'react';
import { Outlet } from 'react-router-dom';
import Category from '../components/category/category';
import Navbar from '../components/navbar/navbar';
import Siteber from '../components/sitebar/siteber';
import { Modal } from '../components/Ui';
import styles from './../styles/admin.module.scss'
const AdminLayout = () => {
    let innerW = window.innerWidth
    return (
        <div className={styles.continer}>
            <Siteber />
            <div
            className={styles.continer__foobar}>
            <Navbar />
            {/* <Category /> */}
           <div className={styles.continer__foobar__box}>
           <Outlet />
           </div>
            </div>
            <Modal />
        </div>
    );
}

export default AdminLayout;
