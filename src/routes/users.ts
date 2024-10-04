import { Router } from "express";

import Users from "../controllers/users";

const router = Router();

router.get("/", Users.getAll);
router.post("/", Users.create);

export default router;
