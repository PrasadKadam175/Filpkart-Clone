import { createContext, useState } from "react"


export const LoginContext = createContext(null);

const ContextProvider = ( { children }) => {

    const [ account , setAccountuser ] = useState('');
    return(
    <LoginContext.Provider value={{ account, setAccountuser}} >
        {children}
    </LoginContext.Provider>
    )
}

export default ContextProvider;