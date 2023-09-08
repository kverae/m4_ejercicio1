import './App.css';
import PostList from "./components/PostList";
import NavBar from "./components/NavBar";
import Search from './components/Search';
import Profile from './components/Profile';
import React from 'react';
import { getPosts } from './services/data-service';

class App extends React.Component {
  state = {
    search: "",
    posts: [],
    section: "postList",
    allPosts :[]
  };

  componentDidMount() {
    getPosts().then((posts) => {
      this.setState({posts: posts, allPosts: posts});
    });
  }

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
        Object.keys(o).some(k => typeof o[k] === 'string' && o[k].toLowerCase().includes(string.toLowerCase())));
  }

  render () {
    return (
    <div className="App">

      <NavBar onLogoClick={this.onLogoClick} onProfileClick={this.onProfileClick}/>
      {this.state.section === "profile" && 
      <Profile avatar="https://source.unsplash.com/random/300x200?sig=1" username="@alex" bio="Texto de prueba para el perfil del usuario" />}

      {this.state.section === "postList" && 
      <Search value = {this.state.search} onSearch={this.onSearch}/> }

      {this.state.section === "postList" && 
      <PostList posts={this.state.posts} />}

    </div>
    );
  }
}

export default App;
