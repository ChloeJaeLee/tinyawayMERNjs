import 'dotenv/config'; 
import tinyAway12 from './controller_Listings.js'; 
import express from 'express';

const app = express(); 

// Start Listening on Port for API Calls 
app.listen(process.env.PORT, () => {
    console.log('hello sweetie'); 
}); 

// Sample Route
app.get('/', async (req, res) => {
    try {
      const result = await tinyAway12(); 
      res.json(result)
  } catch (error) {
    console.error(error);
    res.status(500).send('Tinyaway Mongo Failed');
  }
}); 