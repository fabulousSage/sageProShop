import express from "express"
const router = express.Router()
import {
  AuthUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js"
import { protect } from "../middleware/authMiddleware.js"

router.route("/").post(registerUser)
router.post("/login", AuthUser)
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

export default router
