import Router from "express";
import Controllers from "./controllers.js";

const router = Router();

router.get('/router', Controllers.getAll);
router.post('/router', Controllers.add);
router.get('/router/:id', Controllers.getOne);
router.put('/router', Controllers.update);
router.delete('/router/:id', Controllers.delete);

export default router;