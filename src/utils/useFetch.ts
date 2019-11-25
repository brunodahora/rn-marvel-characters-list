import * as React from 'react';

const useFetch = (url: string) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const status = res.status;
        const json = await res.json();
        setResponse({ status, ...json });
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);
  return { response, error };
};

export default useFetch;
