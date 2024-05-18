import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm/TaskForm";
import { getAllClients } from "../services/api";

const HomePage = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const { data } = await getAllClients();
        setClients(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClients();
  }, []);
  return (
    <div>
      <TaskForm clients={clients} />
    </div>
  );
};

export default HomePage;
