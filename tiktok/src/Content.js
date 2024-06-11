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

const tabs = ["posts", "comments", "albums"];

function Content() {
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState(["posts"]);
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }

      //setShowGoToTop(window.scrollY >= 200)
    };

    window.addEventListener("scroll", handleScroll);

    //Cleanup funtion
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={
            type === tab
              ? {
                  color: "#fff",
                  backgroundColor: "#333",
                }
              : {}
          }
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}

      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}

      {showGoToTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
          }}
        >
          Go to Top
        </button>
      )}
    </div>
  );
}

export default Content;
