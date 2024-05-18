const Task = ({ date, name, time, workingHours, income }) => {
  return (
    <div>
      <p>
        <span>{date}</span> <span>{name}</span> <span>{time}</span>{" "}
        <span>{workingHours}</span> <span> {income}</span>
      </p>
    </div>
  );
};

export default Task;
