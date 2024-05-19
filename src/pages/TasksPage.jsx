import { useEffect, useState } from "react";
import { getAllTasks } from "../services/api";
import TaskList from "../components/TaskList/TaskList";
import { sortedListByDate } from "../services/service";

const TasksPage = () => {
  const [tasks, setTasks] = useState(null);
  const [delTask, setDelTask] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getAllTasks();
        setTasks(sortedListByDate(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [delTask]);

  return (
    <div>
      {tasks !== null && Array.isArray(tasks) && (
        <TaskList tasks={tasks} setAddTask={setDelTask} />
      )}
    </div>
  );
};

export default TasksPage;
