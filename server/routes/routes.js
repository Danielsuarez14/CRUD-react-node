import { Router } from "express";
import { getBooks, getBook, createBook, updateBook, deleteBook } from "../controller/controller.js";

const router = Router()

router.get('/api/v1/', getBooks)
router.get('/api/v1/:id', getBook)
router.post('/api/v1/', createBook)
router.put('/api/v1/:id', updateBook)
router.delete('/api/v1/:id', deleteBook)

export default router