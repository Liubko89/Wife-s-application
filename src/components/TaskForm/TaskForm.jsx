import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./TaskForm.module.css";
import { postTask } from "../../services/api";
import { contactsSchema } from "../../services/schemas";

const INITIAL_FORM_DATA = {
  name: "",
  workingHours: "2",
  date: "",
  time: "",
  income: "",
};

const TaskForm = ({ clients, setIsLoading }) => {
  const handleSubmit = async (formData, { resetForm }) => {
    try {
      const { error } = contactsSchema.validate(formData);
      if (error) return console.log(error.message);
      await postTask(formData);
      setIsLoading(true);
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
            <option>Select a client</option>
            {createNameOptions(clients)}
          </Field>
          <ErrorMessage className="errorMsg" name="name" component="span" />
        </label>
        <label>
          <span className={css.label}>Working hours</span>
          <Field className="input" type="text" name="workingHours" as="select">
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
          <Field className="input" type="date" name="date" />
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
