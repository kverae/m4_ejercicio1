function Post({ user, img, text, minutes, comments }) {
  return (
    <div class="col-lg-3 col-md-4">
      <div class="card mb-3 box-shadow">
        <img id="Img1" class="card-img-top" src={img}  style= {{height:"225px", width:"100%", display:"block"}} data-holder-rendered="true"/>
        <div class="container d-flex justify-content-between align-items-center">
            <small class="text-muted">{minutes} mins</small>
            <img src="like-instagram-heart.png" alt="likes" style={{maxHeight:"50px"}} />
        </div>
        <div class="container" style={{textAlign:"left"}}>
          <strong>{user}</strong>
          <p>{text}</p>            
        </div>
        <div class="container" style={{textAlign:"left", marginBottom:"10px"}}>              
            <img src="message.png" alt="likes" style={{maxHeight:"20px"}} />
            <small class="text-muted"> Comments {comments}</small>
        </div>
      </div>
    </div>
  );
}

export default Post;
