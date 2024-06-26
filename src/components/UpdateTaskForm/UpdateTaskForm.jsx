import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./UpdateTaskForm.module.css";
import { useEffect, useRef, useState } from "react";
import { getAllClients, getTaskById, updateTask } from "../../services/api";
import { updateContactsSchema } from "../../services/schemas";
import { Navigate, useLocation, useParams } from "react-router-dom";

const UpdateTaskForm = () => {
  const [clients, setClients] = useState([]);
  const [isDataSent, setIsDataSent] = useState(false);
  const { taskId } = useParams();
  const [task, setTask] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/tasks");

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const { data } = await getTaskById(taskId);
        setTask(data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchClients = async () => {
      try {
        const { data } = await getAllClients();
        setClients(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClients();
    fetchTask();
  }, [taskId]);

  const handleSubmit = async (formData) => {
    try {
      const { error } = updateContactsSchema.validate(formData);
      if (error) return console.log(error.message);
      await updateTask(taskId, formData);
    } catch (error) {
      console.log(error.message);
    }
    setIsDataSent(true);
  };

  if (task === null) return;

  const { name, workingHours, date, time, income } = task;

  function createNameOptions(clients) {
    return clients.map(({ name, _id }) => (
      <option key={_id} value={name}>
        {name}
      </option>
    ));
  }

  return (
    <>
      {isDataSent && <Navigate to={backLinkRef.current} />}
      <Formik
        initialValues={{
          name,
          workingHours,
          date,
          time,
          income,
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label>
            <span className={css.label}>Client</span>
            <Field className="input" name="name" as="select">
              <optgroup label="Select a client" />
              {createNameOptions(clients)}
            </Field>
            <ErrorMessage className="errorMsg" name="name" component="span" />
          </label>
          <label>
            <span className={css.label}>Working hours</span>
            <Field
              className="input"
              type="text"
              name="workingHours"
              as="select"
            >
              <optgroup label="hh" />
              <option value={1}>1</option>
              <option value={1.5}>1.5</option>
              <option value={2}>2</option>
              <option value={2.5}>2.5</option>
              <option value={3}>3</option>
              <option value={3.5}>3.5</option>
              <option value={4}>4</option>
              <option value={4.5}>4.5</option>
              <option value={5}>5</option>
              <option value={5.5}>5.5</option>
              <option value={6}>6</option>
              <option value={6.5}>6.5</option>
              <option value={7}>7</option>
            </Field>
            <ErrorMessage className="errorMsg" name="number" component="span" />
          </label>
          <label>
            <span className={css.label}>Date</span>
            <Field
              className="input"
              type="date"
              name="date"
              autoComplete="off"
            />
            <ErrorMessage className="errorMsg" name="number" component="span" />
          </label>
          <label>
            <span className={css.label}>Starting at</span>
            <Field
              className="input"
              type="time"
              name="time"
              autoComplete="on"
            />
            <ErrorMessage className="errorMsg" name="number" component="span" />
          </label>
          <label>
            <span className={css.label}>income</span>
            <Field
              className="input"
              type="text"
              name="income"
              autoComplete="off"
            />
            <ErrorMessage className="errorMsg" name="income" component="span" />
          </label>

          <button type="submit">
            <span>Edit</span>
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default UpdateTaskForm;
