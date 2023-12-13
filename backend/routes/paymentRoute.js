import express from 'express'
import { isAuthenticated } from '../middleware/isAuthenticated.js';
import { buySubscription, cancelSubscription, getRazorPayKey, paymentVerfication } from '../controllers/paymentController.js';
const router = express.Router();

// Buy Subscription 
router.route("/subscription").get(isAuthenticated,buySubscription)

// verfication payment and save refernce in database
router.route("/paymentverfication").post(isAuthenticated,paymentVerfication)

// get razorpay key 
router.route("/razorpaykey").get(isAuthenticated,getRazorPayKey)

// cancel subscription 
router.route("/subscribe/cancel").delete(isAuthenticated,cancelSubscription)

export default router;  