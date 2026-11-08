import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  // get all task
  const getTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/task/all");

    setTasks(res.data);
  };

  // add task
  const addTask = async () => {
    if (!title.trim()) {
      return;
    }

    await axios.post("http://localhost:5000/api/task/add", {
      title: title,
    });

    setTitle("");
    getTasks();
  };

  // delete task
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/task/delete/${id}`);

    getTasks();
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-8">My Todo App</h1>

      <div className="max-w-xl mx-auto space-y-3">
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter your task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 p-3 border rounded-lg outline-none"
            required
          />

          <button
            onClick={addTask}
            className="bg-blue-600 text-white px-6 rounded-lg"
          >
            Add Task
          </button>
        </div>

        {tasks.map((task) => (
          <div
            key={task._id}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            <h2 className="text-lg font-medium">{task.title}</h2>

            <button
              onClick={() => deleteTask(task._id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
