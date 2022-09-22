import { createRouter, createWebHistory } from "vue-router";
import BlogHomeView from "../views/BlogHomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: BlogHomeView,
		},
		{
			path: "/blog",
			name: "blog",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/BlogPostView.vue"),
		},
	],
});

export default router;
