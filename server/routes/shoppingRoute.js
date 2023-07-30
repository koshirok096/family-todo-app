import express from "express";
import {
  addShopping,
  getAllShoppings,
  toggleShoppingDone,
  updateShopping,
  deleteShopping,
} from "../controllers/shopping.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post('/:id', verifyToken, addShopping);
router.get('/', verifyToken, getAllShoppings);
router.get('/:id', verifyToken, toggleShoppingDone);
router.put('/:id', verifyToken, updateShopping);
router.delete('/:id', verifyToken, deleteShopping);

export default router;