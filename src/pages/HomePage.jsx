import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm/TaskForm";
import { getAllClients, getAllTasks } from "../services/api";
import FilterTasks from "../components/FilterTasks/FilterTasks";
import { sortedListByHours } from "../services/service";

const HomePage = () => {
  const [clients, setClients] = useState([]);
  const [tasks, setTasks] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
        setTasks(sortedListByHours(data));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClients();
    fetchData();
  }, [isLoading]);

  return (
    <div>
      <TaskForm clients={clients} setIsLoading={setIsLoading} />
      {tasks !== null && Array.isArray(tasks) && (
        <FilterTasks tasks={tasks} setIsLoading={setIsLoading} />
      )}
    </div>
  );
};

export default HomePage;
