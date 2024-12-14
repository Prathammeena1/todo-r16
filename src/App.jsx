import { nanoid } from "nanoid";
import React, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  console.log(tasks);

  const submitHandler = (e) => {
    e.preventDefault();

    const obj = {
      title: task.trim(),
      id: nanoid(),
    };
    if (task.trim()) {
      setTasks([...tasks, obj]);
      setTask("");
    }
  };

  const deleteHandler = (id) => {
    const updatedTasks = tasks.filter((t) => t.id != id);
    setTasks(updatedTasks);
  };

  const editHandler = (id, title) => {
    const newTasks = tasks.map((t) => {
      if (t.id == id) {
        return { ...t, title };
      }
      return t;
    });
  };

  return (
    <div className="h-screen w-full bg-zinc-300">
      <div className="py-2 w-full bg-zinc-200">
        <form onSubmit={submitHandler}>
          <input
            onChange={(e) => setTask(e.target.value)}
            value={task}
            type="text"
            className=""
          />
          <button>Add</button>
        </form>
      </div>

      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div
            key={task.id}
            className="flex gap-10 text-white px-2 py-2 rounded-lg w-fit "
          >
            <h1 className="text-black font-bold">{task.title}</h1>{" "}
            <button
              onClick={() => deleteHandler(task.id)}
              className="bg-sky-400  px-4 py-1 rounded-md"
            >
              delete
            </button>
          </div>
        ))
      ) : (
        <h1>No task yet</h1>
      )}
    </div>
  );
};

export default App;
