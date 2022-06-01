import React from "react";
import {useState} from "react";

function App() {
  const [todoValue, setTodoValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handlInputChange = event => {
    setTodoValue(event.target.value);
  };

  const handleSubmit = () => {
    setTodoList(prevTodoValue =>
      prevTodoValue.concat({ value: todoValue })
    );
    setTodoValue("");
  };

  const handleCheckBoxClick = (listnumber, event) => {
    setTodoList(todoList.map(
        (item, index) =>
          {return{
            ...item,
            isChecked: index === listnumber ? event.currentTarget.checked : item.isChecked
          }}
      
    ))
  };

  return (
    <div className="App">
      <input type="text" value={todoValue} onChange={handlInputChange} />
      <button onClick={handleSubmit}>submmit</button>
      {todoList.map(
        (item, index) =>
          item.value && (
            <li>
              <input
                type="checkbox"
                onClick={handleCheckBoxClick.bind(null, index)}
              />
              {
                item.isChecked ? <del>{item.value}</del> : item.value
              }
            </li>
          )
      )}
    </div>
  );
}

export default App;