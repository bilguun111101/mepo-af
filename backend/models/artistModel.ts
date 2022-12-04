import { Schema, model } from "mongoose";
import { IArtist } from "../utils/types";

const ArtistSchema = new Schema(
  {
    title: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: Array, default: [] },
  },
  { timestamps: true }
);

export const ArtistModel = model<IArtist>("Artist", ArtistSchema);
