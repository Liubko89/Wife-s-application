import { Link, useLocation } from "react-router-dom";
import ModalTask from "../ModalTask/ModalTask";
import { deleteTaskById } from "../../services/api";
import { useState } from "react";
import { changeDateFormat } from "../../services/service";

const Task = ({ id, date, name, time, workingHours, income, setIsLoading }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const location = useLocation();

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handleClick = () => {
    setModalIsOpen(true);
  };
  const handleDelete = async () => {
    try {
      await deleteTaskById(id);
      setModalIsOpen(false);
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <p>
        <span>{changeDateFormat(date)}</span> <span>{time}</span>{" "}
        <span>{name}</span> <b>{workingHours}</b>hours
        <b> {income}€</b>
      </p>
      <Link state={location} to={`/tasks/${id}`}>
        Edit
      </Link>
      <button onClick={handleClick}>Delete</button>
      <ModalTask modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <p>Do you really wont to delete the task from your list</p>
        <button onClick={() => handleDelete(id)}>Ok</button>
        <button
          onClick={() => {
            setModalIsOpen(false);
          }}
        >
          Cancel
        </button>
      </ModalTask>
    </div>
  );
};

export default Task;
