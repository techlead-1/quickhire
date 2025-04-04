import express from 'express'
import {uploadLogo, uploadResume} from "../middlewares/upload.middleware.js";
import {getUser, updateUser, uploadUserImage, uploadUserResume} from "../controllers/user.controller.js";

const userRouter = express.Router()

userRouter.get('/', getUser)

userRouter.put('/', updateUser)

userRouter.post('/resume', uploadResume.single('resume'), uploadUserResume)

userRouter.post('/profile_image', uploadLogo.single('image'), uploadUserImage)

export default userRouter