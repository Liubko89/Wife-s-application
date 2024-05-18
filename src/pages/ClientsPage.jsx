import { useEffect, useState } from "react";
import { getAllClients } from "../services/api";
import ClientDetailsPage from "./ClientDetailsPage";

const ClientsPage = () => {
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
    <ul>
      {clients.map(({ _id, name }) => {
        return (
          <li key={_id}>
            <ClientDetailsPage name={name} />
          </li>
        );
      })}
    </ul>
  );
};

export default ClientsPage;
