import TaskList from "../TaskList/TaskList";
import { changeDateFormat, todayDate } from "../../services/service";
import { useState } from "react";
import TotalResult from "../TotalResult/TotalResult";

const FilterTasks = ({ tasks, setIsLoading }) => {
  const [dayFrom, setDayFrom] = useState(todayDate);
  const [dayTo, setDayTo] = useState(todayDate);

  const [fromDateChangeFormat, setFromDateChangeFormat] = useState(
    changeDateFormat(todayDate)
  );
  const [toDateChangeFormat, setToDateChangeFormat] = useState(
    changeDateFormat(todayDate)
  );

  const filteredTasks = tasks.filter(
    ({ date }) => date >= dayFrom && date <= dayTo
  );

  const handleChangeFrom = (e) => {
    console.log(e.target.value);

    setDayFrom(e.target.value);
    setFromDateChangeFormat(changeDateFormat(e.target.value));
  };
  const handleChangeTo = (e) => {
    console.log(e.target.value);

    setDayTo(e.target.value);
    setToDateChangeFormat(changeDateFormat(e.target.value));
  };

  return (
    <div>
      <input type="date" value={dayFrom} onChange={handleChangeFrom} />
      <span>From{fromDateChangeFormat}</span>
      <input type="date" value={dayTo} onChange={handleChangeTo} />
      <span>From{toDateChangeFormat}</span>
      {tasks !== null && Array.isArray(tasks) && (
        <TaskList tasks={filteredTasks} setIsLoading={setIsLoading} />
      )}
      {tasks !== null && Array.isArray(tasks) && (
        <TotalResult filteredTasks={filteredTasks} />
      )}
    </div>
  );
};

export default FilterTasks;
