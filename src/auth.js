import axios from "axios";
import Cookies from 'js-cookie'

const ENDPOINT_PATH = "https://api-todos-enwu.onrender.com/api/";

const login = (user) => {
	return axios.post(ENDPOINT_PATH + "/auth/login/", JSON.parse(user));
};

const register = (data) => {
	return axios.post(ENDPOINT_PATH+'/users/',data)
}
function isAuthenticated() {
//   const token = localStorage.getItem("token"); // Cambia la clave según tu implementación
	const token = sessionStorage.token
  return token !== null;
}

function logout() {
	sessionStorage.clear()
}

export default {
	login,register, isAuthenticated,logout
};
