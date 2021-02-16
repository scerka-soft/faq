import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Page404 from "./views/404.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/:pathMatch(.*)*",
		name: "404",
		component: Page404
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
