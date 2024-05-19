import Task from "../Task/Task";

const TaskList = ({ tasks, setIsLoading }) => {
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
              setIsLoading={setIsLoading}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
