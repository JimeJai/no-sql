import { Router } from "express";

import Auth from "../controllers/auth";

const router = Router();

router.post("/register", Auth.register);
router.post("/login", Auth.login);
router.post("/logout", Auth.logout);

export default router;
