import useFetchData from "../../hooks/useFetchData";
import { defaultPath } from "../../constants";

export default function Photos() {
  const data = useFetchData({
    //Data is corrupted since unavaible to get images from url provided by API
    dataResource: "https://jsonplaceholder.typicode.com/photos",
  });
  return (
    <>
      <button>
        {" "}
        <a href={`${defaultPath}/todos`}>Go to Todos</a>
      </button>
      <button>
        {" "}
        <a href={`${defaultPath}/posts`}>Go to Posts</a>{" "}
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
      </div>
    </>
  );
}
