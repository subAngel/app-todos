import axios from "axios";
// import Cookies from 'js-cookie'
import api from '@/utils/api'
import { router } from '../routes'



const login = (user) => {
	return axios.post(api + "/auth/login/", user);
};

const register = (data) => {
	return axios.post(api + '/users/register', data)
}
function isAuthenticated() {
	const token = $cookies.get('auth')
	return token !== null;
}

function fetchUser(token) {
	const config = {
		headers: {
			'Authorization': `Bearer ${token}`
		}
	};
	return axios.get(api + '/profile', config)
}
function logout() {
	// sessionStorage.clear()
	if ($cookies.get('auth')) {
		$cookies.remove('auth')
		router.push('/login')
	}
}

export default {
	login, register, isAuthenticated, logout, fetchUser
};
