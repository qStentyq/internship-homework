import useFetchData from "../../hooks/useFetchData";
import { Link } from "react-router-dom";

export default function Photos() {
  const { data, error } = useFetchData({
    //Data is corrupted since unavaible to get images from url provided by API
    dataResource: "https://jsonplaceholder.typicode.com/photos",
  });
  return (
    <>
      <button>
        {" "}
        <Link to={`/todos`}>Go to Todos</Link>
      </button>
      <button>
        {" "}
        <Link to={`/posts`}>Go to Posts</Link>{" "}
      </button>
      <div className='photos'>
        {data.length > 0 ? (
          data.map(
            (photo: {
              albumId: number;
              id: number;
              thumbnailUrl: string;
              title: string;
              url: string;
            }) => (
              <div key={photo.id} className='photo'>
                <img src={photo.thumbnailUrl} alt={photo.title} />
                <h3>{photo.title}</h3>
              </div>
            )
          )
        ) : (
          <div className='loading'>Loading...</div>
        )}
        {error instanceof Error && <p>Error loading posts: {error.message}</p>}
      </div>
    </>
  );
}
