import express from "express";
import note from "./note";

const router = express.Router();

router.use("/note", note);

export default router;
