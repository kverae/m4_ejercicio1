import { useEffect, useState } from "react";
import { useUserContext } from "../contexts/user-context";
import { getUserAuthenticatedProfile, isUserAuthenticated } from "../services/request-service";
import NavBar from "./NavBar";
import { Navigate, useNavigate } from "react-router-dom";

function Profile(){

    const [avatar, setAvatar] = useState(null);
    const [bio, setBio] = useState(null);
    const [username, setUsername] = useState(null);

    const [ authenticated ] = useUserContext();
    const navigate = useNavigate();

    useEffect (() => {
        if(isUserAuthenticated()){
            getUserAuthenticatedProfile().then((profile) => {
                setAvatar(profile.avatar);
                setBio(profile.bio);
                setUsername(profile.username);
            })
            .catch((error) => {
                console.log("error al obtener datos del usuario", error)
                alert("Ocurrió un error inesperado al obtener los datos del usuario, vuelva a intentarlo");
            });
        }
    },[]);

    return (
        <>
        {authenticated ? 
            (
            <><NavBar />
            <div className="container text-center">
                <div className="row pt-4">
                    <img src={avatar} class="rounded-circle" 
                    alt="Profile" width="150" height="150" style={{display:"block", marginLeft:"auto", marginRight:"auto", width:"150px"}}/> 
                </div>
                <div className="row pt-4">
                    <span><strong>{username}</strong></span>
                </div>
                <div className="row pt-2">
                    <span>{bio}</span>
                </div>
                <div className="row pt-4">
                    <button className="btn btn-primary" onClick={() => {
                        localStorage.removeItem("token");
                        navigate("/login");
                    }}>Salir</button>
                </div>
            </div></>
        
            ) :<Navigate to="/login"/>
        }
        </>
    );
}

export default Profile;