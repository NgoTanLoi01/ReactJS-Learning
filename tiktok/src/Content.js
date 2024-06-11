import { useEffect, useState } from "react";

// 1.useEffect(callback)
//  - Gọi callback mỗi khi component re-render
//  - Gọi callback sau khi component thêm element và dom
// 2.useEffect(callback, [])
//  -Chỉ gọi callback 1 lần sau khi component mounted
// 3.useEffect(callback, [deps])
//  - Callback sẽ được gọi lại mỗi khi deps thay đổi

//-----------------
//1. Callback luôn được gọi sau khi component mounted

function Content() {
  const [countdown, setCountdown] = useState(180);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCountdown(countdown - 1);
      console.log('Countdown...');
    }, 1000);

    return() => clearInterval(timerId)
  }, [countdown]);

  return (
    <div>
      <h1>{countdown}</h1>
    </div>
  );
}

export default Content;
