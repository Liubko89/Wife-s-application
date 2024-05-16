import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./TaskForm.module.css";

const INITIAL_FORM_DATA = {
  name: "",
  workingHours: "2",
  date: "",
  time: "",
};

const TaskForm = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <Formik
      //   validationSchema={contactsSchema}
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label>
          <span className={css.label}>Client</span>
          <Field
            className="input"
            type="text"
            name="name"
            placeholder="Enter client's name"
            autoComplete="off"
          />
          <ErrorMessage className="errorMsg" name="name" component="span" />
        </label>
        <label>
          <span className={css.label}>Working hours</span>
          <Field
            className="input"
            type="text"
            name="workingHours"
            placeholder="hh"
            autoComplete="off"
          />
          <ErrorMessage className="errorMsg" name="number" component="span" />
        </label>
        <label>
          <span className={css.label}>Date</span>
          <Field className="input" type="date" name="date" autoComplete="off" />
          <ErrorMessage className="errorMsg" name="number" component="span" />
        </label>
        <label>
          <span className={css.label}>Starting at</span>
          <Field className="input" type="time" name="time" autoComplete="on" />
          <ErrorMessage className="errorMsg" name="number" component="span" />
        </label>

        <button type="submit">
          <span>Add task</span>
        </button>
      </Form>
    </Formik>
  );
};

export default TaskForm;
