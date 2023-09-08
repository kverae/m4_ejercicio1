import React from "react";

class Post extends React.Component {
  
  state = {
    likes: 1
  };

  addLike(){
    let numberLikes = this.state.likes+1;
    this.setState({likes: numberLikes});
  }

  render (){
    return (
      <div className="col-lg-3 col-md-4">
        <div className="card mb-3 box-shadow">
          <img id="Img1" className="card-img-top" src={this.props.img}  style= {{height:"225px", width:"100%", display:"block"}} data-holder-rendered="true"/>
          <div className="container d-flex justify-content-between align-items-center pt-2">
              <small className="text-muted">{this.props.minutes} mins</small>
              <button type="button" class="btn btn-danger" onClick={() => this.addLike()}>
                <img src="heart.png" alt="likes" style={{maxHeight:"20px"}} /> 
                &nbsp; {this.state.likes}
                </button>            
          </div>
          <div className="container" style={{textAlign:"left"}}>
            <strong>{this.props.user}</strong>
            <p>{this.props.text}</p>            
          </div>
          <div className="container" style={{textAlign:"left", marginBottom:"10px"}}>              
              <img src="message.png" alt="likes" style={{maxHeight:"20px"}} />
              <small className="text-muted"> Comments {this.props.comments}</small>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
