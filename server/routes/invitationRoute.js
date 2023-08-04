import express from "express";
import { verifyToken } from "../verifyToken";


const router = express.Router();

router.post('/:id', verifyToken, createInvitation);
router.post('/:id', verifyToken, acceptInvitation);
router.post('/:id', verifyToken, rejectInvitation);
router.get('/:id', verifyToken, retrieveInvitation);

export default router;