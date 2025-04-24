import useFetchData from "../../hooks/useFetchData";
import "./Photos.css";
import { useState } from "react";
import NavButtons from "../NavButtons";

export default function Photos() {
  const [curPage, setCurPage] = useState(1);
  const { data, error } = useFetchData({
    dataResource: `https://picsum.photos/v2/list?page=${curPage}&limit=10`,
  });
  const preprevPage = curPage - 2;
  return (
    <>
      <NavButtons />
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
        <div className='footer_nav'>
          {curPage > 1 && (
            <button
              onClick={() => {
                setCurPage(curPage - 1);
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}>
              Prev page
            </button>
          )}
          <ul className='pages'>
            {Array.from({ length: 5 }, (_, i) =>
              preprevPage + i > 0 ? (
                <li
                  className={`page ${
                    curPage === preprevPage + i ? "cur_page" : ""
                  }`}
                  onClick={() => setCurPage(preprevPage + i)}>
                  {preprevPage + i}
                </li>
              ) : (
                ""
              )
            )}
          </ul>
          <button
            onClick={() => {
              setCurPage(curPage + 1);
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}>
            Next page
          </button>
        </div>
      </div>
    </>
  );
}
