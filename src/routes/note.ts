import { Router } from "express";
import { createNote, getNote } from "../controllers/note.controller";

const router = Router();

router.get("/:id", getNote);
router.post("/", createNote);

export default router;
