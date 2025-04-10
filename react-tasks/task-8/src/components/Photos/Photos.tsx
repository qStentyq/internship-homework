
import useFetchData from '../../hooks/useFetchData'

export default function Photos() {

  const data = useFetchData({dataResource: 'https://jsonplaceholder.typicode.com/photos'})
  return (
    <div className='photos'>
      {data.length > 0 ? data.map((photo: { albumId: number, id: number; thumbnailUrl: string, title: string; url: string;  }) => (
        <div key={photo.id} className='photo'>
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <h3>{photo.title}</h3>
        </div>
      )): (
        <div className='loading'>Loading...</div>
      )}
    </div>

  )
}
