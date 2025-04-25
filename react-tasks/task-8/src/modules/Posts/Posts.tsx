import useFetchData from "../../hooks/useFetchData";
import "./Posts.css";
import NavButtons from "../Reusable/NavButtons";

export default function Posts() {
  const { data, error } = useFetchData({
    dataResource: "https://jsonplaceholder.typicode.com/posts",
  });

  return (
    <>
      <NavButtons />
      {error instanceof Error && <p>Error loading posts: {error.message}</p>}
      {data && (
        <div>
          {data.map(
            (post: {
              userId: number;
              id: number;
              title: string;
              body: string;
            }) => {
              return (
                <div key={post.id} className='post'>
                  <h4>
                    <h3>Post #{post.id}:</h3> {post.title}
                  </h4>
                  <p>{post.body}</p>
                </div>
              );
            }
          )}
        </div>
      )}
    </>
  );
}
