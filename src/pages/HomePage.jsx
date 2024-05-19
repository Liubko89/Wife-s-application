import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm/TaskForm";
import { getAllClients, getAllTasks } from "../services/api";
import FilterTasks from "../components/FilterTasks/FilterTasks";

const HomePage = () => {
  const [clients, setClients] = useState([]);
  const [tasks, setTasks] = useState(null);
  const [addTask, setAddTask] = useState(false);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const { data } = await getAllClients();
        setClients(data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchData = async () => {
      try {
        const { data } = await getAllTasks();
        setTasks(data);
        setAddTask(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClients();
    fetchData();
  }, [addTask]);

  return (
    <div>
      <TaskForm clients={clients} setAddTask={setAddTask} />
      {tasks !== null && Array.isArray(tasks) && <FilterTasks tasks={tasks} />}
    </div>
  );
};

export default HomePage;
