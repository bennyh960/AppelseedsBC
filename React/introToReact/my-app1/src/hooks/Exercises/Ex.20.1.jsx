import axios from "axios";
import React, { useEffect, useState } from "react";

// !CLEANUP FUNCTION EXERCISE

export default function CleanUpEx() {
  const [data, setData] = useState("");
  const [isShow, setShow] = useState(true);
  useEffect(() => {
    // *documention for cancle axios request
    // https://github.com/axios/axios#user-content-cancellation:~:text=You%20can%20cancel%20a%20request%20using%20a%20cancel%20token.

    const controller = new AbortController();

    (async () => {
      const url =
        "http://go-vegan.co.il/API2.0/meals.php?lat=32.0731082&lng=34.7805689&radius=5000&address=%D7%94%D7%95%D7%91%D7%A8%D7%9E%D7%9F+18%2C+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91-%D7%99%D7%A4%D7%95&version=4&uuid=563909759323956&_=1653936882606";
      const { data } = await axios.get(url, {
        signal: controller.signal,
      });
      setData(data.meals);
    })();

    // CleanUP function
    return () => {
      controller.abort();
      console.log("CleanUP");
    };
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        toggle
      </button>
      {isShow && JSON.stringify(data)}
    </div>
  );
}
