import express from "express";
import { getAllTasks } from "../controllers/tasks.js";

const router = express.Router();

router.route('/').get(getAllTasks).post();
router.route('/:id').get().patch().post().delete();

export default router; 