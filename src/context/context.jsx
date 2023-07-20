import React,{createContext, useState} from 'react';
const context = createContext()
const Context = ({children}) => {
    const [modal,setModal] = useState(false)
    const [isDostup,setIsDostup] = useState(false)
    return (
        <context.Provider value={{modal,setModal,isDostup,setIsDostup}}>
            <context.Consumer>
              {() =>  children}
            </context.Consumer>
        </context.Provider>
    );
}
export {context}
export default Context;
