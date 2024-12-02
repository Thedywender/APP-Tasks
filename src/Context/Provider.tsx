import { useState } from "react";
import Context from "./Context";
import { ProviderProps, ProviderValues } from "../types/ProviderTypes";

function Provider({ children}: ProviderProps) {
    const [user, setUser] = useState('');

    const onLogin = (username: string) => {
        setUser(username);

    }

    const values: ProviderValues = {
        user,
        onLogin
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}
    
    
    
    
    
export default Provider;