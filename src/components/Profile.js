function Profile({avatar, username, bio}){

    return (
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
        </div>
    );
}

export default Profile;