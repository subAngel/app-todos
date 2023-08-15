import axios from "axios";

const ENDPOINT_PATH = "https://api-todos-enwu.onrender.com/api/";

const login = (user) => {
	return axios.post(ENDPOINT_PATH + "login", user);
};

export default {
	login,
};
