import { useEffect, useState } from "react";
import { getAllTasks } from "../services/api";
import TaskList from "../components/TaskList/TaskList";

const TasksPage = () => {
  const [tasks, setTasks] = useState(null);

  const reRender = (id) => setTasks(tasks.filter(({ _id }) => _id !== id));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getAllTasks();
        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {tasks !== null && Array.isArray(tasks) && (
        <TaskList tasks={tasks} reRender={reRender} />
      )}
    </div>
  );
};

export default TasksPage;
