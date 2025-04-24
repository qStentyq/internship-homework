import { useEffect, useState } from "react";
interface UseFetchDataProps {
  dataResource: string;
}
import axios from "axios";

export default function useFetchData({ dataResource }: UseFetchDataProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | Error | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(dataResource);
        setData(response.data);
      } catch (err) {
        setError((err as Error).message || "Unknown error occurred");
      }
    };
    fetchData();
  }, [dataResource]);
  // console.log(data);
  return { data, error };
}
