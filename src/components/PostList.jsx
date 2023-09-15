import { Navigate } from "react-router-dom";
import { useUserContext } from "../contexts/user-context";
import Post from "./Post";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { getPostList, isUserAuthenticated } from "../services/request-service";
import Search from "./Search";

function PostList() {
  const [ authenticated ] = useUserContext();  

  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  useEffect (() => {
    if(isUserAuthenticated()){
      getPostList().then((posts) => {
        setAllPosts(posts);
        setPosts(posts);
      })
      .catch((error) => {
        console.log("error al obtener listado de posts", error)
        alert("Ocurrió un error inesperado al obtener los posts, vuelva a intentarlo");
      });
    }
  },[]);

  function onSearch (value) {
    
    setSearch(value);
    console.log("search " + search);

    if(value === "") {
      setPosts(allPosts);
      //this.setState({posts: allPosts});
    } else {
      let filteredPost = filterByValue(allPosts, value);
      setPosts(filteredPost);
      //this.setState({posts: filteredPost});
    }
    
  }

  function filterByValue(array, string) {
    return array.filter(o =>
        //Object.keys(o).some(k => typeof o[k] === 'string' && o[k].toLowerCase().includes(string.toLowerCase()))
        o.author.username.toLowerCase().includes(string.toLowerCase()) || o.text.toLowerCase().includes(string.toLowerCase())
        );
  };


  console.log("postlist " + authenticated);   

  return (
    <>
    {authenticated ? 
    (
      <><NavBar />
      <Search value = {search} onSearch={onSearch}/>
      <div className="album bg-light container">
            <div className="row container">
              {posts.length === 0
                ? "Loading..." :
                posts.map((post, i) => (
                  <Post
                    image={post.image}
                    user={post.author.username}
                    text={post.text}
                    comments={post.comments.length}
                    createdAt={post.createdAt}
                    postId={post.id}
                    likes={post.likes} />
                ))}
            </div>
          </div></>
    ) :<Navigate to="/login"/>
    }
    </>
  );
}

export default PostList;
