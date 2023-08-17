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
	Cookies.get('authToken')
  return token !== null;
}

function logout() {
	Cookies.remove('authToken')
}

export default {
	login,register, isAuthenticated,logout
};
