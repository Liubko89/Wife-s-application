import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

export async function postTask(obj) {
  const data = await axios.post("/tasks", obj);
  return data;
}

export async function getAllTasks() {
  const data = await axios.get("/tasks");
  return data;
}

export async function getTaskById(id) {
  const data = await axios.get(`/tasks/${id}`);
  return data;
}

export async function deleteTaskById(id) {
  const data = await axios.delete(`/tasks/${id}`);
  return data;
}

export async function updateTask(id, body) {
  const data = await axios.put(`/tasks/${id}`, body);
  return data;
}

export async function getAllClients() {
  const data = await axios.get("/clients");
  return data;
}
