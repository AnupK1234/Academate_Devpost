import React, { useState } from "react";

const Goals = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("low");
  const [doneList, setDoneList] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Don't add empty goals
    setTodos([...todos, { goal: input, priority: priority }]);
    setInput("");
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleDone = (index) => {
    const newDoneList = [...doneList];
    if (newDoneList.includes(index)) {
      newDoneList.splice(newDoneList.indexOf(index), 1);
    } else {
      newDoneList.push(index);
    }
    setDoneList(newDoneList);
  };

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest font-medium">My Goals:</h1>
          <div className="flex mt-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              type="text"
              placeholder="Add Goal"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <select
              className="border rounded py-2 px-3 mr-4 text-grey-darker"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <button
              className="flex-no-shrink p-2 border-2 rounded text-teal border-teal-500 hover:text-white hover:bg-teal-500"
              type="submit"
              onClick={addTodo}
            >
              Add
            </button>
          </div>
        </div>
        <div>
          {todos.map((todo, index) => (
            <div key={index} className="flex mb-4 items-center">
              <p className={`w-full text-grey-darkest ${doneList.includes(index) ? 'line-through' : ''}`}>
                {todo.goal} - Priority: {todo.priority}
              </p>
              <button
                className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green-600 hover:bg-green-600"
                onClick={() => toggleDone(index)}
              >
                Done
              </button>
              <button
                className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red-600 hover:text-white hover:bg-red-600"
                onClick={() => removeTodo(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goals;
