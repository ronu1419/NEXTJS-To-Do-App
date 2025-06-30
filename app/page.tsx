"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const page = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<
    { id: string; text: string; done: boolean }[]
  >([]);

  const handleAdd = () => {
    setTasks([...tasks, { id: uuidv4(), text: task, done: false }]);
    setTask("");
  };

  const handleDelete = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleComplete = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>ToDo App</h1>
      <div>
        <input
          type="text"
          value={task}
          placeholder="Enter a task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {tasks.map((item, _) => (
          <li key={item.id}>
            <div
              className={`cursor-pointer ${item.done ? "line-through" : ""}`}
              onClick={() => handleComplete(item.id)}
            >
              {item.text}
            </div>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
