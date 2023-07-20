import React, { useContext, useState,Fragment} from 'react';
import styles from './modal.module.scss';
import {context} from '../../../context/context'
const Index = () => {
    const {modal,setModal,setIsDostup} = useContext(context)
   
    const isTrue = () =>{
          setIsDostup(true)
          setModal(false)
    }
    const isFalse = () =>{
      setModal(false)
    }
    return (
        <Fragment>
            {
                modal ?  <div className={styles.modalContiner}>
                <div className={styles.modal}>
                <p>Ushbu kontent o'chirilsinmi ?</p>
                  <div className={styles.modal__btns}>  
                         <button onClick={isTrue}>
                          Ha
                         </button>
                         <button onClick={isFalse}>
                          Yo'q
                         </button>
                  </div>
                </div>
              </div> : <></>
            }
        </Fragment>
       
    );
}

export default Index;
