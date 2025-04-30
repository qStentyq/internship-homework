import useFetchData from "../../hooks/useFetchData";
import ContentLoading from "../Reusable/ContentLoading";

import "./Posts.css";
// import NavButtons from "../Reusable/NavButtons";

export default function Posts() {
  const { data, error } = useFetchData({
    dataResource: "https://jsonplaceholder.typicode.com/posts",
  });

  return (
    <>
      {/* <NavButtons /> */}
      {error instanceof Error && <p>Error loading posts: {error.message}</p>}
      {data.length > 0 ? (
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
                  <h3>
                    <p>Post #{post.id}:</p> {post.title}
                  </h3>
                  <p>{post.body}</p>
                </div>
              );
            }
          )}
        </div>
      ) : (
        <ContentLoading />
      )}
    </>
  );
}
