import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./TaskForm.module.css";
import { postTask } from "../../services/api";
import { contactsSchema } from "../../services/schemas";

const INITIAL_FORM_DATA = {
  name: "",
  workingHours: "",
  date: "",
  time: "",
  income: "",
};

const TaskForm = ({ clients }) => {
  const handleSubmit = async (formData, { resetForm }) => {
    try {
      const { error } = contactsSchema.validate(formData);
      if (error) return console.log(error.message);
      await postTask(formData);
    } catch (error) {
      console.log(error.message);
    }
    resetForm();
  };

  function createNameOptions(clients) {
    return clients.map(({ name, _id }) => (
      <option key={_id} value={name}>
        {name}
      </option>
    ));
  }

  return (
    <Formik initialValues={INITIAL_FORM_DATA} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label>
          <span className={css.label}>Client</span>
          <Field className="input" name="name" as="select">
            <option value="">Select a Client</option>
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
        <label>
          <span className={css.label}>Income</span>
          <Field
            className="input"
            type="text"
            name="income"
            autoComplete="off"
          />
          <ErrorMessage className="errorMsg" name="income" component="span" />
        </label>

        <button type="submit">
          <span>Add task</span>
        </button>
      </Form>
    </Formik>
  );
};

export default TaskForm;
