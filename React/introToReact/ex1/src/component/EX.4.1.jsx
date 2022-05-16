function ButtonOb(props) {
  //   console.log(props);
  return (
    <div>
      <button style={{ fontWeight: props.font }} type="button">
        {props.role}
      </button>
      {/* <input style={{ fontWeight: props.font }} type="button" />
      {props.role} */}
    </div>
  );
}

function Container() {
  return (
    <div className="Container" style={{ display: "flex", width: 500, height: 400, justifyContent: "space-evenly" }}>
      <ButtonOb role="Not important" />
      <ButtonOb role="Important" font="bold" />
    </div>
  );
}

// export default ButtonOb;
export default Container;
