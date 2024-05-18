import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import UpdateTaskForm from "../components/UpdateTaskForm/UpdateTaskForm";

const TasksDetailsPage = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/tasks");
  return (
    <div>
      <UpdateTaskForm />
      <Link to={backLinkRef.current}>Back</Link>
    </div>
  );
};

export default TasksDetailsPage;
