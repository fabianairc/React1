import { useEffect } from "react";
import { useState } from "react";

const useFetch(url)=>{  useEffect(() => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [Error, setError] = useState(null);
  


    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for thart resource");
        }
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
        setError(null);
      });
  }, []);
 return {data, isPending, Error}
}
export default useFetch