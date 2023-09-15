import { useEffect } from 'react'
import axios from 'axios'
import { useUserContext } from '../contexts/user-context';
import history from '..';

const AuthInterceptor = ({ children }) => {
    const [ setAuthenticated ] = useUserContext();

    useEffect(() => {
        axios.interceptors.response.use(response => {
            return response;
         }, error => {
           if (error.response.status === 401 && error.response.data.message !== "invalid credentials") {
            alert("Sesión expirada");
            localStorage.removeItem("token");
            setAuthenticated(false);
            history.push("/login");
           }
           return error;
         });
    }, [setAuthenticated])

    return children
}

export default AuthInterceptor