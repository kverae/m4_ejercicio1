import Post from "./Post";

const postList = [
  {
    img: "https://source.unsplash.com/random/300x200?sig=" + Math.random(),
    user: "@eric",
    minutes: 5,
    comments: 10,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    img: "https://source.unsplash.com/random/300x200?sig=" + Math.random(),
    user: "@kathe",
    minutes: 3,
    comments: 8,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    img: "https://source.unsplash.com/random/300x200?sig=" + Math.random(),
    user: "@mauro",
    minutes: 8,
    comments: 12,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    img: "https://source.unsplash.com/random/300x200?sig=" + Math.random(),
    user: "@nia",
    minutes: 5,
    comments: 25,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

function PostList() {
  return (
    <div class="album bg-light container">
      <div class="row container">
        {postList.map((post, i) => (
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
