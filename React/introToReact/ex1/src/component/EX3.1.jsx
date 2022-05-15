import React from "react";
// import ""

// class exc3_1 extends React.Component {
//   render() {
//     return <div>{boxes()}</div>;
//   }
// }

// function exc3_1() {
// function boxes() {
//   return (
//     <div className="box-1" style={{ width: "70vw", height: "70vh", backgroundColor: "green" }}>
//       <div className="box-2" style={{ width: "60vw", height: "60vh", backgroundColor: "blue" }}>
//         <div className="box-3" style={{ width: "50vw", height: "50vh", backgroundColor: "pink" }}>
//           <div className="box-4" style={{ width: "40vw", height: "20vh", backgroundColor: "purple" }}></div>
//           <div className="box-4" style={{ width: "40vw", height: "20vh", backgroundColor: "purple" }}></div>
//         </div>
//       </div>
//     </div>
//   );
// }

function Exc3_1() {
  return (
    <div>
      <Box1 />
    </div>
  );
}

function Box1() {
  return (
    <div className="box-1" style={{ width: "70vw", height: "70vh", backgroundColor: "green" }}>
      <Box2 />
      {/* {Box2()} */}
    </div>
  );
}
function Box2() {
  return (
    <div className="box-2" style={{ width: "60vw", height: "60vh", backgroundColor: "blue" }}>
      <Box3 />
    </div>
  );
}
function Box3() {
  return (
    <div className="box-3" style={{ width: "50vw", height: "50vh", backgroundColor: "pink" }}>
      <Box4 />
      <Box4 />
    </div>
  );
}
function Box4() {
  return <div className="box-4" style={{ width: "40vw", height: "20vh", backgroundColor: "purple" }}></div>;
}

export default Exc3_1;
