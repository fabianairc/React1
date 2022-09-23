import { useEffect } from "react";
import { useState } from "react";

    
const [data, setData] = useState(null);
const [isPending, setIsPending] = useState(true);
const [Error, setError] = useState(null);

const useFetch(url)=>{  useEffect(() => {

    constgit  abrtCont= new AbortController()

  


    fetch(url,{signal: abrtCont.signal})
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
        if (err.name  === "AbortError") {
            console.log("fetch aborted")}
            else {
                setIsPending(false);
                setError(err.message);
                setError(null);
            }
        }
        
      });
      return ()=>{abrtCont.abort()};
  }, []);

 return {data, isPending, Error}
}
export default useFetch