import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import auth from './utils/auth'
import Tasks from './views/Tasks.vue'
import CompletedTasks from './views/CompletedTasks.vue'
const routes = [
	{
		path: "/:username",
		component: Home,
		meta: {
			requiresAuth: true
		},
		name: "Home",
		children: [
			{
				path: '/:username/tasks',
				name: "Tasks",
				component: Tasks
			}, {
				path: '/:username/completed-tasks',
				name: "CompletedTasks",
				component: CompletedTasks
			}
		]
	},
	{
		path: "/login",
		component: Login,
		name: "login",
		meta: {
			requiresAuth: false
		},
	},
	{
		path: "/register",
		component: Register,
		name: "register",
		meta: {
			requiresAuth: false
		},
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
