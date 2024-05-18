import { Link, useLocation } from "react-router-dom";
import Task from "../Task/Task";
import { deleteTaskById } from "../../services/api";
import { useState } from "react";
import ModalTask from "../ModalTask/ModalTask";

const TaskList = ({ tasks, reRender }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const location = useLocation();

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <ul>
      {tasks.map(({ _id, date, name, time, workingHours, income }) => {
        const handleClick = () => {
          setModalIsOpen(true);
        };
        const handleDelete = async () => {
          try {
            await deleteTaskById(_id);
            setModalIsOpen(false);
            reRender(_id);
          } catch (error) {
            console.log(error);
          }
        };
        return (
          <li key={_id}>
            <Task
              id={_id}
              date={date}
              name={name}
              time={time}
              workingHours={workingHours}
              income={income}
            />
            <Link state={location} to={`/tasks/${_id}`}>
              Edit
            </Link>
            <button onClick={handleClick}>Delete</button>
            <ModalTask modalIsOpen={modalIsOpen} closeModal={closeModal}>
              <p>Do you really wont to delete the task from your list</p>
              <button onClick={handleDelete}>Ok</button>
              <button
                onClick={() => {
                  setModalIsOpen(false);
                }}
              >
                Cancel
              </button>
            </ModalTask>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
