import express from "express"
import { contact, courseRequest, getDashboardStats } from "../controllers/otherController.js";
import { authorizeAdmin, isAuthenticated } from "../middleware/isAuthenticated.js";
const router = express.Router();


// contact form  
router.route("/contact").post(contact) 

// Request Form 
router.route("/courserequest").post(courseRequest)


// get Admin Dashboard 
router.route("/admin/stats").get(isAuthenticated,authorizeAdmin,getDashboardStats)


export default router;