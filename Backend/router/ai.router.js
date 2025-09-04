import { Router } from "express";
import {aicontroller} from "../controller/ai.controller.js";                

const router = Router();


router.post('/ask',aicontroller);


export default router;