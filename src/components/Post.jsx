import * as moment from 'moment';
import React from "react";
import { like } from '../services/request-service';

class Post extends React.Component {
  
  state = {
    likes: this.props.likes
  };

  addLike(){
    like(this.props.postId).then(() => {
      let numberLikes = this.state.likes+1;
      this.setState({likes: numberLikes});
    })
    .catch((error) => {
      console.log("error al agregar like", error)
      alert("Ocurrió un error inesperado al agregar like, vuelva a intentarlo");
    });   
  }

  render (){
    
    // saber el tiempo que paso desde la creacion del post
    var starts = moment(this.props.createdAt);
    var ends   = moment();
    let timeToShow = "";
    if (ends.diff(starts, 'years') > 0){
      timeToShow = ends.diff(starts, 'years')  + " years";
    } else if(ends.diff(starts, 'months')  > 0){
      timeToShow = ends.diff(starts, 'months')  + " months";
    } else if(ends.diff(starts, 'days')  > 0){
      timeToShow = ends.diff(starts, 'days')  + " days";
    } else if(ends.diff(starts, 'hours')  > 0){
      timeToShow = ends.diff(starts, 'hours')  + " hours";
    } else if(ends.diff(starts, 'minutes')  > 0){
      timeToShow = ends.diff(starts, 'minutes')  + " minutes";
    } else if(ends.diff(starts, 'seconds')  > 0){
      timeToShow = ends.diff(starts, 'seconds')  + " seconds";
    }

    return (
      <div className="col-lg-3 col-md-4">
        <div className="card mb-3 box-shadow">
          <img id="Img1" className="card-img-top" src={this.props.image}  style= {{height:"225px", width:"100%", display:"block"}} data-holder-rendered="true"/>
          <div className="container d-flex justify-content-between align-items-center pt-2">
              <small className="text-muted">{timeToShow}</small>
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
