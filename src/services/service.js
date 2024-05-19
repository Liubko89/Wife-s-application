const date = new Date();
const day = String(date.getDate()).padStart(2, 0);
const month = String(date.getMonth() + 1).padStart(2, 0);
const year = String(date.getFullYear());
export const todayDate = `${year}-${month}-${day}`;

export const changeDateFormat = (date) => date.split("-").reverse().join(".");

export const sortedListByHours = (tasks) =>
  tasks.toSorted((a, b) => a.time.localeCompare(b.time));

export const sortedListByDate = (tasks) =>
  tasks.toSorted((a, b) => b.date.localeCompare(a.date));
