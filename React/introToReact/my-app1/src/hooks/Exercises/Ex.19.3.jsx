import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Alogolia() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearch] = useState("hooks");
  const [isSearchClicked, setBool] = useState(false);
  const [isError, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSpinner, setSpinner] = useState(true);
  useEffect(() => {
    const callApi = async () => {
      setSpinner(true);
      //   const { data } = await axios.get("https://hn.algolia.com/api/v1/search?query={hooks}",{
      try {
        const { data } = await axios.get("https://hn.algolia.com/api/v1/search?", {
          params: {
            query: searchTerm,
          },
        });

        setBooks(data.hits);
        setError(false);
      } catch (error) {
        console.log("Error", error);
        setError(() => true);
        setErrorMsg(error.message);
      }
    };
    callApi();
    setSpinner(false);
  }, [isSearchClicked]);

  const drawBooks = () => {
    return (
      <ul>
        {books.map((book) => {
          return <li key={book.objectID}>{book.title}</li>;
        })}
      </ul>
    );
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={(e) => setSearch(e.target.value)} />
      <button
        onClick={() => {
          setBool((prev) => !prev);
          console.log(isSearchClicked);
        }}
      >
        Search
      </button>
      {isSpinner ? "SPINNER LOADING" : !isError ? drawBooks() : errorMsg}
    </div>
  );
}
