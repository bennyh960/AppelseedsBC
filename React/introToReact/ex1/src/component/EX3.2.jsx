import React from "react";

// * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Each of these should be componenet : Quiz, QuizTitle, Q1, Q1Title, Q1Input, Q2, Q2Title, Q2Input
// * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function Quiz() {
  return (
    <div
      className="big-container"
      style={{
        width: "500px",
        height: "500px",
        border: "black solid 1px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <QuizTitle />
      <Q1 />
      <Q2 />
    </div>
  );
}

function QuizTitle() {
  return <h1 className="title">How Do You Like Front End?</h1>;
}

function Q1() {
  return (
    <form>
      <label htmlFor="range">How much you lve FE?</label>
      <br></br>
      <input type="range" id="range" name="range" min="0" max="5" style={{ thumbHeight: 90, trackHeight: 20 }}></input>
    </form>
  );
}

// ====================================
function Q2() {
  return (
    <div>
      <Q2Title />
      <Q2Input />
    </div>
  );
}

function Q2Title() {
  return <div>What is your favourite front end feature/topic?</div>;
}

function Q2Input() {
  return <input type={"text"} style={{ width: 350 }}></input>;
}
// ====================================
const Exc3_2 = () => {
  return (
    <div>
      <Quiz />
    </div>
  );
};

export default Exc3_2;
