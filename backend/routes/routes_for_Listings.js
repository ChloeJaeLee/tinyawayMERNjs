import express from "express";
import tinyAway12 from "../controllers/controller_Listings";

export const listingsRouter = express.Router(); 

listingsRouter.get('/api/12listings', async (req, res) => {
    try {
      const result = await tinyAway12(); 
      res.json(result)
  } catch (error) {
    console.error(error);
    res.status(500).send('Tinyaway Mongo Failed');
  }
}); 