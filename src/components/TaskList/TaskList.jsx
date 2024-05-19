import Task from "../Task/Task";

const TaskList = ({ tasks, setAddTask }) => {
  return (
    <ul>
      {tasks.map(({ _id, date, name, time, workingHours, income }) => {
        return (
          <li key={_id}>
            <Task
              id={_id}
              date={date}
              name={name}
              time={time}
              workingHours={workingHours}
              income={income}
              setAddTask={setAddTask}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
