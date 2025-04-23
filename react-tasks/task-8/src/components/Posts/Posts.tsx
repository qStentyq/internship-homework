import useFetchData from "../../hooks/useFetchData";

export default function Posts() {
  const { data, error } = useFetchData({
    dataResource: "https://jsonplaceholder.typicode.com/posts",
  });

  return (
    <>
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
                  <h3>{post.title}</h3>
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
