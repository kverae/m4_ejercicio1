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
              img={post.image}
              user={post.author.username}
              text={post.text}
              comments={post.comments.length}
              createdAt={post.createdAt}
              postId={post.id}
              likes={post.likes}
            />
        ))}
      </div>
    </div>
  );
}

export default PostList;
