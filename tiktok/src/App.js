import { useState } from "react";


function App() {

  const [info, setInfo] = useState({
    name: 'Nguyen Van A',
    age: 18,
    address: 'Tra Vinh, VN'
  })

  const handleUpdate = ()=>{
    setInfo({
      ...info,
      bio: 'Yeu mau hong ^^'
    })
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default App;
