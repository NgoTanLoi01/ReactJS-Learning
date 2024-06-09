import { useState } from "react";
import Content from "./Content";

//Mounted / Unmounted

function App() {
  const [show, setShow] = useState(false)

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() =>setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  );
}

export default App;
