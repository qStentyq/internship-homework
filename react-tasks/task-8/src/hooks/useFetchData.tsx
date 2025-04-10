import  {useEffect, useState} from 'react'


//@ts-expect-error TS6133: 'dataResource' is of unknown type.
export default function useFetchData({dataResource}) {
  const [data, setData] = useState([])

  useEffect(() => { 
    const fetchData = async () => {
      const response = await fetch(dataResource)
      const result = await response.json()
      setData(result)
    }

    fetchData().then(() => {
      console.log(data)
    })
    
  })
  return data
}
