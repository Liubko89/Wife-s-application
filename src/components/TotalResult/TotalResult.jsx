import { useEffect, useState } from "react";

const TotalResult = ({ filteredTasks }) => {
  const [Income, setIncome] = useState(0);
  const [WorkingHours, setWorkingHours] = useState(0);

  useEffect(() => {
    if (!filteredTasks) return;
    const totalIncome = filteredTasks.reduce(
      (acc, { income }) => (acc += Number(income)),
      0
    );
    const totalWorkingHours = filteredTasks.reduce(
      (acc, { workingHours }) => (acc += Number(workingHours)),
      0
    );
    setIncome(totalIncome);
    setWorkingHours(totalWorkingHours);
  }, [filteredTasks]);

  return (
    <div>
      <b>Total working hours: {WorkingHours}</b>
      <br />
      <b>Total income: {Income}</b>
    </div>
  );
};

export default TotalResult;
