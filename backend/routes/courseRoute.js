import express from 'express'
import { addCourseLecture, createCourse, deleteCourse, deleteLecture, getAllCourses, getCourseLecture } from '../controllers/courseController.js';
import singleUpload from '../middleware/multer.js';
import { authorizeAdmin, authorizeSubscription, isAuthenticated } from '../middleware/isAuthenticated.js';
const router = express.Router()


router.route("/courses").get(getAllCourses)
router.route("/course").post(isAuthenticated,authorizeAdmin,singleUpload,createCourse)
router.route('/course/:id').get(isAuthenticated,authorizeSubscription, getCourseLecture)
.post(isAuthenticated, authorizeAdmin, singleUpload, addCourseLecture)
.delete(isAuthenticated,authorizeAdmin,deleteCourse) // delete course not particular lecture  
router.route('/lecture').delete(isAuthenticated,authorizeAdmin,deleteLecture)


// router.route("/courses").get(getAllCourses)
// router.route("/course").post(singleUpload,createCourse)
// router.route('/course/:id').get(getCourseLecture)
// .post(singleUpload, addCourseLecture)
// .delete(deleteCourse) // delete course not particular lecture  
// router.route('/lecture').delete(deleteLecture)

export default router;