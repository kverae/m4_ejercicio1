import Post from "./Post";

function PostList({posts}) {
  console.log(posts.length)  
  return (
    <div className="album bg-light container">
      <div className="row container">
        {posts.length === 0
          ? "Loading..." :    
          posts.map((post, i) => (
            <Post
              img={post.img}
              user={post.user}
              text={post.text}
              comments={post.comments}
              minutes={post.minutes}
            />
        ))}
      </div>
    </div>
  );
}

export default PostList;
