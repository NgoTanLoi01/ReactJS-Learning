import { useState } from "react";

//Response from API
const courses = [
  {
    id: 1,
    name: "HTML, CSS",
  },
  {
    id: 2,
    name: "Javascript",
  },
  {
    id: 3,
    name: "ReactJS",
  },
];

function App() {
  const [checked, setChecked] = useState([]);

  const handleCheck = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id)
      if(isChecked){
        //Uncheck
        return checked.filter(item => item !== id)
      }else{
        return [...prev, id]
      }
    });
  }

  const handleSubmit = () => {
    //call api
    console.log({ ids: checked });
  }

  return (
    <div style={{ padding: 32 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
