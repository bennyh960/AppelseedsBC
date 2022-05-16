function ButtonOb(props) {
  //   console.log(props);
  return (
    <div>
      {/* <input type="button" />
      {props.role}; */}
      <button style={{ fontWeight: props.font }} type="button">
        {props.role}
      </button>
    </div>
  );
}

function Container() {
  return (
    <div style={{ display: "flex", width: 500, justifyContent: "space-evenly" }}>
      <ButtonOb role="Not important" />
      <ButtonOb role="Important" font="bold" />
    </div>
  );
}

// export default ButtonOb;
export default Container;
