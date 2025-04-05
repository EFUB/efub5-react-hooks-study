import React, { useEffect, useState } from "react";
import defaultAxios from "axios";

//useAxios
const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const [trriger, setTrriger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrriger(Date.now());
  };

  useEffect(() => {
    if (!opts.url) {
      return;
    }
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trriger]);
  return { ...state, refetch };
};

export default function useAxiosStudy() {
  const [loading, data, error, refetch] = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });

  console.log(`${(loading, error, JSON.stringify(data))}`);
  return (
    <div>
      <h2>{loading && <p>loading</p>}</h2>
      <h1>{data && data.status}</h1>
      <button onClick={refetch}>Reftech</button>
    </div>
  );
}
