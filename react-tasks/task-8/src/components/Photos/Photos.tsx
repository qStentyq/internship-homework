import useFetchData from "../../hooks/useFetchData";
import { Link } from "react-router-dom";
import "./Photos.css";
import { useState } from "react";

export default function Photos() {
  const [curPage, setCurPage] = useState(1);
  const { data, error } = useFetchData({
    //Data is corrupted since unavaible to get images from url provided by API
    dataResource: `https://picsum.photos/v2/list?page=${curPage}&limit=10`,
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
        <h1>Photo galery: </h1>
        {data.length > 0 ? (
          data.map(
            (photo: {
              id: number;
              author: string;
              width: string;
              height: string;
              url: string;
              download_url: string;
            }) => (
              <div key={photo.id} className='photo'>
                <img
                  className='photos_api_image'
                  src={photo.download_url}
                  alt={`${photo.author}'s picture`}
                />
                <h3>
                  Author: <i> {photo.author}</i>
                </h3>
              </div>
            )
          )
        ) : (
          <div className='loading'>Loading...</div>
        )}
        {error instanceof Error && <p>Error loading posts: {error.message}</p>}
        <button
          onClick={() => {
            setCurPage(curPage - 1);
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}>
          Prev page
        </button>
        <button
          onClick={() => {
            setCurPage(curPage + 1);
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}>
          Next page
        </button>
      </div>
    </>
  );
}
