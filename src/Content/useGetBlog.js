import { useState, useEffect } from 'react';

const useGetBlog = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, {signal: abortCont.signal})
      .then(res => {
        if(!res.ok) {
          throw Error('Data can not be reached');
        }
        return res.json();
      })
      .then(data => {
        setData(data)
        setIsLoading(false)
        setError(null)
      })
      .catch((e) => {
        if (e.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          setIsLoading(false);
          setError(e.message);
        }
      })
    }, 1000);

    return () => abortCont.abort();
  },[url]);

  return {data, isLoading, error};
}

export default useGetBlog;