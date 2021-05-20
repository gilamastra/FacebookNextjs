import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Post from "./Post";
const Posts = ({ posts }) => {
  const [realtimePosts] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );
  console.log(posts);
  return (
    <div>
      {realtimePosts
        ? realtimePosts?.docs.map((post) => {
            console.log(post);
            return (
              <Post
                id={post.id}
                key={post.id}
                name={post.data().name}
                message={post.data().message}
                email={post.data().email}
                timestamp={post.data().timestamp}
                image={post.data().image}
                postImage={post.data().postImage}
              />
            );
          })
        : posts.map((post) => {
            <Post
              id={post.id}
              key={post.id}
              name={post.name}
              message={post.message}
              email={post.email}
              timestamp={post.timestamp}
              image={post.image}
              postImage={post.postImage}
            />;
          })}
    </div>
  );
};

export default Posts;
