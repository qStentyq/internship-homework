import useFetchData from "../../hooks/useFetchData"

export default function Posts() {

  const data = useFetchData({dataResource: 'https://jsonplaceholder.typicode.com/posts'})
  return (
    <div>{data.map((post: {userId: number, id: number, title: string, body: string}) => {
        return (
            <div key = {post.id}className='post'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </div>
        )
    })}</div>
  )
}
