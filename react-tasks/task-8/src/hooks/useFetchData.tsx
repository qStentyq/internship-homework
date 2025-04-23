import { useEffect, useState } from "react";
interface UseFetchDataProps {
  dataResource: string;
}
export default function useFetchData({ dataResource }: UseFetchDataProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | Error | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataResource);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError((err as Error).message || "Unknown error occurred");
      }
    };
    fetchData();
  }, [dataResource]);
  return { data, error };
}
