import { createContext, useContext, useEffect, useState } from "react";
import { isUserAuthenticated } from "../services/request-service";
import { Navigate } from "react-router-dom";

const UserContext = createContext();

function UserContextProvider({children}) {
    console.log(children);

    const [authenticated, setAuthenticated] = useState(false);

    useEffect (() => {
        // setear el valor de acuerdo a si ya tenemos token o no
        setAuthenticated(isUserAuthenticated());
        console.log("isUserAuthenticated ", isUserAuthenticated());
    },[]);

    if(!authenticated){
        console.log("no autenticado - context");
        <Navigate to="/login" ></Navigate>
    }
    return (
        <UserContext.Provider 
            value={[authenticated, setAuthenticated ]}>
                {children}                
        </UserContext.Provider>
    );
}

export function useUserContext(){
    return useContext(UserContext);
}

export default UserContextProvider;