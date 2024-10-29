import { useContext,createContext } from "react";
import { useState } from "react";
const UserContext = createContext();

const UserProvider = ({children}) => {

    const [user,setUser] = useState("Akshat");
    const changeUser = (newName) => {
        setUser(newName);
    }

    return(
        <>
            <UserContext.Provider value={{user,changeUser}}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export {UserProvider,UserContext}