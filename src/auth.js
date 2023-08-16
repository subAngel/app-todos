import axios from "axios";

const ENDPOINT_PATH = "https://api-todos-enwu.onrender.com/api/";

const login = (user) => {
	return axios.post(ENDPOINT_PATH + "/auth/login/", JSON.parse(user));
};

const register = (data) => {
	return axios.post(ENDPOINT_PATH+'/users/',data)
}

export default {
	login,register
};
