import { useState, useEffect } from "react";
import axios from "axios";
const CONTEXT_KEY = "9315a53a201c6af47";
const API_KEY = "AIzaSyCLx1nn4AUe3Rvzdls6ysoG4Zf_6kyhgys";
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(
          `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        )
        .then((result) => {
          setData(result.data);
        })
        .catch((error) => {});
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
