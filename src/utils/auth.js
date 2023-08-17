import axios from "axios";
// import Cookies from 'js-cookie'
import api from '@/utils/api'



const login = (user) => {
	return axios.post(api + "/auth/login/", user);
};

const register = (data) => {
	return axios.post(api+'/users/register',data)
}
function isAuthenticated() {
	const token = sessionStorage.token
	return token !== null;
}

function logout() {
	// sessionStorage.clear()
	$cookies.remove('auth')
}

export default {
	login,register, isAuthenticated,logout
};
