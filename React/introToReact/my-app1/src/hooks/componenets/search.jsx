import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  //   console.log(results);
  // ! We cant use useeffect as async so for that we have 3 solutions
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };
    if (term) {
      search();
    }
  }, [term]);

  const renderedResults = () =>
    results.map((result) => {
      return (
        <div key={result.pageid} className="item">
          <div className="right floated content">
            <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">
              Go
            </a>
          </div>
          <div className="content">
            <div className="header">{result.title}</div>
            <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
            {/* {result.snippet} */}
          </div>
        </div>
      );
    });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="input">Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            type="text"
            className="input"
            id="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults()}</div>
    </div>
  );
}

//! useEffect sec arrgumant
// ? [] => run at initial render only
// ? nothing => at initial render and every rerender
// ? [data]=> at initial and after every rerender IF data has changed  since last render
