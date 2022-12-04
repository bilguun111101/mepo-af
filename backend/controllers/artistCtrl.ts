import { Request, Response } from "express";
import { ArtistModel } from "../models/artistModel";

export const artistCtrl = {
  createArtist: async (req: Request, res: Response) => {
    try {
      const { title, name, image } = req.body;
      const error: { [name: string]: string } = {};
      if (!title) {
        error.title = "Please fill out this field";
      }
      if (!name) {
        error.name = "Please fill out this field";
      }
      if (Object.keys(error).length > 0) return res.status(400).json({ msg: error });
      const newArtist = new ArtistModel({
        title,
        name,
        image,
      });
      await newArtist.save();
      res.status(201).json({ msg: "Artist created." });
    } catch (error) {
      return res.status(500).json({ msg: (error as Error).message });
    }
  },
  getArtists: async (req: Request, res: Response) => {
    try {
      const artists = await ArtistModel.find();
      res.status(200).json({ artists });
    } catch (error) {
      return res.status(500).json({ msg: (error as Error).message });
    }
  },
  deleteArtist: async (req: Request, res: Response) => {
    try {
      await ArtistModel.findByIdAndDelete(req.params.id);
      res.status(200).json({ msg: "Artist deleted." });
    } catch (error) {
      return res.status(500).json({ msg: (error as Error).message });
    }
  },
  updateArtist: async (req: Request, res: Response) => {
    try {
      const { title, name, image } = req.body;
      const error: { [name: string]: string } = {};
      if (!title) {
        error.title = "Please fill out this field";
      }
      if (!name) {
        error.name = "Please fill out this field";
      }
      if (Object.keys(error).length > 0) return res.status(400).json({ msg: error });
      await ArtistModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            title,
            name,
            image,
          },
        },
        { new: true }
      );
      res.status(200).json({ msg: "Artist updated." });
    } catch (error) {
      return res.status(500).json({ msg: (error as Error).message });
    }
  },
};
