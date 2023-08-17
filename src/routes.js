import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import auth from './auth'
const routes = [
	{
		path: "/",
		component: Home,
		meta: {
			requiresAuth: true
		},
		name: "home",
	},
	{
		path: "/login",
		component: Login,
		name: "login",
	},
	{
		path: "/register",
		component: Register,
		name: "register",
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	// verifica si la ruta requiere autenticacion
	if (to.meta.requiresAuth) {
		if (auth.isAuthenticated()) {
			next()
		} else {
			next('/login'); // redirige al login si no esta logueado
		}
	} else {
		next() // permite el acceso a rutas publicas
	}
})

export { router };
