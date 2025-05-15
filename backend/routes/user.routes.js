import { Router } from "express";
import { createContact } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router();

router.route("/contact").post(createContact);

export default router;