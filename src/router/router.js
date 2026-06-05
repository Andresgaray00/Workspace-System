import reservationView from "@/views/reservationView";
import loginView from "@/views/loginView";
import homeView from "@/views/homeView";
import { isAuthenticated } from "@/utils";

const routes = {
  "/": loginView,
  "/home": homeView,
  "/reservation": reservationView,
};

export const navigateTo = (path) => {
  history.pushState({}, "", path);
  router();
};

export const router = () => {
  const app = document.querySelector("#app");

  let path = window.location.pathname;

  // Proteger rutas
  if (
    path !== "/" &&
    !isAuthenticated()
  ) {
    path = "/";
  }

  const view = routes[path] || loginView;

  app.innerHTML = view();
};

window.addEventListener("popstate", router);