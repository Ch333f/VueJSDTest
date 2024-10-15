import { createWebHistory, createRouter } from "vue-router";

import Reports from "./components/pages/Reports.vue";


const routes = [
  { 
    name: "Reports",
    path: "/reports",
    component: Reports,
    alias: ["/"],
  },
  {
    name: "Settings",
    path: "/settings",
    component: Reports,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
