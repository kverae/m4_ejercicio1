import './App.css';
import PostList from "./components/PostList";
import NavBar from "./components/NavBar";
import Search from './components/Search';
import Profile from './components/Profile';
import React from 'react';
import Login from './components/Login';
import { getPostList, getProfile } from './services/request-service';

class App extends React.Component {
  state = {
    search: "",
    posts: [],
    section: "postList",
    allPosts :[],
    token: null,
    avatar : "",
    bio: "",
    username: ""
  };

  onLogoClick  = () => {
    this.setState({section: "postList"});
  }

  onProfileClick = () => {
    this.setState({section: "profile"});
  }

  onSearch = (value) => {
    
    this.setState({search: value});
    console.log("search " + this.state.search);

    if(value == "") {
      this.setState({posts: this.state.allPosts});
    } else {
      let filteredPost = this.filterByValue(this.state.allPosts, value);

      this.setState({posts: filteredPost});
    }
    
  }

  filterByValue(array, string) {
    return array.filter(o =>
        //Object.keys(o).some(k => typeof o[k] === 'string' && o[k].toLowerCase().includes(string.toLowerCase()))
        o.author.username.toLowerCase().includes(string.toLowerCase()) || o.text.toLowerCase().includes(string.toLowerCase())
        );
  }

  setToken = () => {
    this.setState({token: localStorage.getItem("token")})
    getPostList().then((posts) => {
      this.setState({posts: posts, allPosts: posts});
    })
    .catch((error) => {
      console.log("error al obtener listado de posts", error)
      alert("Ocurrió un error inesperado al obtener los posts, vuelva a intentarlo");
    });

    // userID utilizado para el perfil del usuario atenticado ya que el login no trae este dato
    let userId = "6136940b24d622245e1046a1";
    getProfile(userId).then((profile) => {
      this.setState({avatar: profile.avatar, bio: profile.bio, username: profile.username});
    })
    .catch((error) => {
      console.log("error al obtener datos del usuario", error)
      alert("Ocurrió un error inesperado al obtener los datos del usuario, vuelva a intentarlo");
    });

  }

  render () {
    return (
    <div className="App">

    {typeof this.state.token === 'string' ? (
      <>
        <NavBar onLogoClick={this.onLogoClick} onProfileClick={this.onProfileClick}/>
        {this.state.section === "profile" && 
        <Profile avatar={this.state.avatar} username={this.state.username} bio={this.state.bio} />}

        {this.state.section === "postList" && 
        <Search value = {this.state.search} onSearch={this.onSearch}/> }

        {this.state.section === "postList" && 
        <PostList posts={this.state.posts} />}
      </>
    ) : 
    <Login setToken={this.setToken} /> }
    </div>
    );
  }
}

export default App;
