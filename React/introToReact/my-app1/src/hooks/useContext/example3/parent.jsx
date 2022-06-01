// import React, { useState } from "react";
import ThemProvider from "./themProvider";
import Child from "./child";

export default function Parent() {
  return (
    <ThemProvider>
      <Child />
    </ThemProvider>
  );
}
