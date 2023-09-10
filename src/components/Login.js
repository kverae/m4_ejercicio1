import React from "react";
import { login } from "../services/request-service";

class Login extends React.Component{

    state = {
        error: false
    }

    async handleSubmit(event){
        event.preventDefault();
        const form = event.target;
        try {
            let result = await login(form.loginName.value, form.loginPassword.value);
            localStorage.setItem("token", result.token);
            this.props.setToken();
        } catch (error) {
            console.log(error);
            this.setState({error: true});
            setTimeout(() => {
                this.setState({error: false});
              }, "2000");
        }

        
    }

    render(){
        return (
            <div className="tab-content">
                {this.state.error && <div className="alert alert-danger" role="alert">
                    Email o password incorrecto!
                </div>}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <h4>&nbsp; Iniciar Sesión</h4>
                </nav>
                <form onSubmit={(e) => this.handleSubmit(e)} className="container pt-4">

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

}

export default Login;