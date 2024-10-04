import { Router } from "express";

import Users from "../controllers/users";

const router = Router();

router.post("/", Users.create);
router.get("/", Users.getAll);
router.get("/:id", Users.getOne);

export default router;
