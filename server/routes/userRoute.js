import express from 'express';

import {bookVisit,cancelBooking,createUser,getAllBookings, getAllFavorites, toFav} from '../controllers/userCntrl.js';


const router = express.Router();

router.post("/register",jwtcheck,createUser);
router.post("/bookVisit/:id",jwtcheck,bookVisit);
router.post("/allBookings", getAllBookings)
router.post("/removebooking/:id",jwtcheck,cancelBooking)
router.post("/toFav/:rid", jwtcheck,toFav)
router.post("/allFav/",jwtcheck,getAllFavorites)

export {router as userRoute}