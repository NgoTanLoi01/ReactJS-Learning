import { memo } from "react";

function Content() {
  console.log('re-render');

  return <h2>XIN CHAO MOI NGUOI</h2>;
}

export default memo(Content);
