import Child from "./child";
import { ThemeProvider } from "./themContext";

export default function Parent() {
  return (
    <div>
      <ThemeProvider>
        {/* <Child light={"gray"} dark={"black"} /> */}
        <Child width={"50vw"} margin={" 3rem auto"} height={"5rem"} />
      </ThemeProvider>
    </div>
  );
}
