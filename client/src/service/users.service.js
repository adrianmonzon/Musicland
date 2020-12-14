import axios from "axios";

export default class UserService {
  constructor() {
    this.apiHandler = axios.create({
      baseURL: "http://localhost:5000/api/users",
      withCredentials: true,
    });
  }

  getUsers = () => this.apiHandler.get("/getAllUsers");
  getUser = (userId) => this.apiHandler.get(`/getOneUser/${userId}`);
  saveUser = (userInfo) => this.apiHandler.post(`/newUser/`, userInfo);
  filterByInstrument = instrument => this.apiHandler.get(`/filterByInstrument/${instrument}`);
  deleteUser = (userId) => this.apiHandler.delete(`/deleteUser/${userId}`);
}
