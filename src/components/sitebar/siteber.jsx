import React from 'react';
import { Link } from 'react-router-dom';
import styles from './sitebar.module.scss'
import {images} from './../../assets/index.js'
import {AiOutlineSetting, AiOutlineUserAdd} from 'react-icons/ai'
import { category } from '../../constants/data/category.jsx';
const Siteber = () => {
    const hight = window.innerHeight
    
    return (
        <div 
        style={{height:hight}}
        className={styles.continer}>
            <Link className={styles.continer__logo} to='/' >
                <img src={images.logo} alt="logotip" />
            </Link>
            <ul className={styles.nav}>
                {category.map((el,i) => {
                    return   <li className={styles.nav__item}>
                    <Link to={el.path}>{el.name}</Link>
                     {el.icon}
                </li>
                })}

                {/* <li className={styles.nav__item}>
                    <Link to='/'>Settings</Link>
                    <AiOutlineSetting size={20} />
                </li> */}
            </ul>
        </div>
    );
}

export default Siteber;
