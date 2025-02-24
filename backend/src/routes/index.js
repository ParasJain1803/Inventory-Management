import { Router } from "express";
import authRoute from "./Auth.route.js";

const routes = [
  {
    path: "/auth",
    route: authRoute,
  },
];
const router = Router();
routes.forEach((curr) => {
  router.use(curr.path, curr.route);
});

export default router;
