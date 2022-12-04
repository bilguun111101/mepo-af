import { Router } from "express";
import { auth } from "../middleware/auth";
import { authAdmin } from "../middleware/authAdmin";
import { artistCtrl } from "../controllers/artistCtrl";

export const artistRouter = Router();

artistRouter.route("/artist").get(artistCtrl.getArtists).post(auth, authAdmin, artistCtrl.createArtist);
artistRouter
  .route("/artist/:id")
  .delete(auth, authAdmin, artistCtrl.deleteArtist)
  .patch(auth, authAdmin, artistCtrl.updateArtist);
