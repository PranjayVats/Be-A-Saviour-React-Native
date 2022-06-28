import express from "express";
import {
  addLocation,
  forgetPassword,
  getMyProfile,
  login,
  logout,
  register,
  resetPassword,
  updatePassword,
  updateProfile,
  verify,
  showVolunteers
} from "../controllers/User.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.route("/register").post(register);

router.route("/verify").post(isAuthenticated, verify);

router.route("/login").post(login);
router.route("/logout").get(logout);

router.route("/addlocation").post(isAuthenticated, addLocation);
router.route("/me").get(isAuthenticated, getMyProfile);
router.route("/showvolunteers").get(isAuthenticated, showVolunteers);

// router
//   .route("/task/:taskId")
//   .get(isAuthenticated, updateTask)
//   .delete(isAuthenticated, removeTask);

router.route("/updateprofile").put(isAuthenticated, updateProfile);
router.route("/updatepassword").put(isAuthenticated, updatePassword);

router.route("/forgetpassword").post(forgetPassword);
router.route("/resetpassword").put(resetPassword);

export default router;
