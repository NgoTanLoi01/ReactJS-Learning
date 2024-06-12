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
//2. Cleanup funtion luôn được gọi trước khi component unmounted
//3. Cleanup funtion luôn được gọi trước khi callback được gọi (trừ lần mounted)

function Content() {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    //Cleanup
    return () =>{
      avatar && URL.revokeObjectURL(avatar.preview)
    }
  }, [avatar]);

  const handleReviewAvatar = (e) => {
    const file = e.target.files[0];

    file.preview = URL.createObjectURL(file);

    setAvatar(file);
  };

  return (
    <div>
      <input type="file" onChange={handleReviewAvatar} />
      {avatar && <img src={avatar.preview} alt="" width="80%" />}
    </div>
  );
}

export default Content;
