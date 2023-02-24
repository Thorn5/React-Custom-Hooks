import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [apiData, setApiData] = useState(null);

  // console.log(url);
  // console.log(data);

  const fetchData = () => {
    if (typeof url !== "string" || url.length === 0) {
      throw new Error("Invalid URL");}
    setLoading(true)
    fetch(url)
      .then((response) => response.json())
      .then((data) => setApiData(data))
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  
  useEffect(() => {
        fetchData();
  }, []);

  return { loading, error, apiData };
};

export default useFetch;

// const { loading, error, apiData } = useFetch(url);
// return (<>{loading ? (<p>Loading...</p>) : error ? (`${error}`) : (<div>{apiData && console.log({apiData})}</div>)}</>)
// map: <ul>{path.map((item, index) => (<li key={index}>{item}</li>))}</ul>
