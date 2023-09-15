import React, { useState } from "react";
import { login } from "../services/request-service";
import { useUserContext } from "../contexts/user-context";
import { useNavigate } from "react-router-dom";

function Login () {

    const [error, setError] = useState(false);
    const [ authenticated, setAuthenticated ] = useUserContext();
    const navigate = useNavigate();
    
    async function handleSubmit(event){
        event.preventDefault();
        const form = event.target;
        
        try {
            let result = await login(form.loginName.value, form.loginPassword.value);
            localStorage.setItem("token", result.token);
            setAuthenticated(true);
            console.log("login " + authenticated);
            navigate("/");
        } catch (error) {
            console.log(error);
            setError(true);
            setTimeout(() => {
                setError(false);
              }, "3000");
        }

        
    }

    return (
        <div className="tab-content">
            {error && <div className="alert alert-danger" role="alert">
                Email o password incorrecto!
            </div>}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h4>&nbsp; Iniciar Sesión</h4>
            </nav>
            <form onSubmit={handleSubmit} className="container pt-4">

                <div className="form-outline mb-4">
                    <label className="form-label">Email or username</label>
                    <input type="text" id="loginName" name="loginName" className="form-control" />                        
                </div>
                
                <div className="form-outline mb-4">
                    <label className="form-label">Password</label>
                    <input type="password" id="loginPassword" name="loginPassword" className="form-control" />                        
                </div>
                
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
            
        </div>
    )

}

export default Login;