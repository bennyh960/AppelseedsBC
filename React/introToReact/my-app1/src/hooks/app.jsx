import React from "react";
import Accordion from "./componenets/accordion";

const items = [
  {
    title: "What is react?",
    content: "React is a front-end javascript framwork",
  },
  {
    title: "Why use react?",
    content: "React is a favorite  js framwork among engineers",
  },
  {
    title: "How do you use react?",
    content: "You use React by creating componenets",
  },
];

export default function App() {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}
