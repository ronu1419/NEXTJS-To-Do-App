"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Text, Tasks, TaskItem } from "../types";

const Page = () => {
  const [text, setText] = useState<Text>("");
  const [tasks, setTasks] = useState<Tasks>([]);

  const handleAdd = () => {
    if (!text.trim()) return;
    setTasks([...tasks, { id: uuidv4(), text: text, done: false }]);
    setText("");
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

  const TaskItem = (props: TaskItem) => {
    const { task, onComplete, onDelete } = props;
    const classNameForComplete = `cursor-pointer ${
      task.done ? "line-through" : ""
    }`;

    return (
      <li>
        <div
          className={classNameForComplete}
          onClick={() => onComplete(task.id)}
        >
          {task.text}
        </div>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </li>
    );
  };

  return (
    <div>
      <h1>ToDo App</h1>
      <div>
        <input
          type="text"
          value={text}
          placeholder="Enter a task"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onComplete={handleComplete}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default Page;
