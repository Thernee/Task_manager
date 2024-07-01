import express from "express";

const router = express.Router();

router.route('/').get().post();
router.route('/:id').get().patch().post().delete();

export default router; 