import { memo } from "react";

function Content({ onIncrease }) {
  console.log("re-render");

  return (
    <>
      <h2>XIN CHAO MOI NGUOI</h2>
      <button onClick={onIncrease}>Click me!</button>
    </>
  );
}

export default memo(Content);
