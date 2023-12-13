import express from "express"
import { addtoplaylist, changePassword, deleteMyProfile, deleteUser, forgotPassword, getAllUsers, login, logout, profile, register, removeFromPlaylist, resetPassword, updateProfile, updateUserRole, updateprofilepicture } from "../controllers/userController.js";
import { authorizeAdmin, isAuthenticated } from "../middleware/isAuthenticated.js";
const router = express.Router();
import singleUpload from '../middleware/multer.js' 


router.route("/register").post(singleUpload, register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/me").get( isAuthenticated, profile)
router.route("/me").delete(isAuthenticated,deleteMyProfile)
router.route("/changepassword").put(isAuthenticated,changePassword) 
router.route('/updateprofile').put(isAuthenticated,updateProfile) 
router.route('/updateprofilepicture').put(isAuthenticated,singleUpload, updateprofilepicture);
router.route('/forgotpassword').post(forgotPassword)
router.route('/resetpassword/:token').put(resetPassword)
router.route('/addtoplaylist').post(isAuthenticated,addtoplaylist)
router.route('/removeFromPlaylist').delete(isAuthenticated,removeFromPlaylist)


// Admin rooute 
router.route("/admin/users").get(isAuthenticated,authorizeAdmin,getAllUsers)
router.route("/admin/user/:id").put(isAuthenticated,authorizeAdmin,updateUserRole)
.delete(isAuthenticated,authorizeAdmin,deleteUser) 


export default router ;