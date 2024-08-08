import 'dotenv/config'; 
import express from 'express';
import cors from 'cors'; 
import tinyAway12 from './controllers/controller_Listings.js';
import {allStates, allCities} from './controllers/controller_Search.js';

const app = express(); 

// Allow cross origin access
app.use(cors({
    origin: '*', 
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"]
  }));

// Start Listening on Port for API Calls 
app.listen(process.env.PORT, () => {
    console.log('hello sweetie'); 
}); 

///// Search Routes /////

// Get all states
app.get('/api/findStates', async (req, res) => {
    try {
        const result = await allStates(); 
        console.log(res.json(result)); 
    } catch (error) {
        console.error(error); 
        res.status(500).send('All states failed'); 
    }
}); 

// Get all cities
app.get('/api/findCities', async (req, res) => {
    try {
        const result = await allCities(); 
        console.log(res.json(result)); 
    } catch (error) {
        console.error(error); 
        res.status(500).send('All cities failed'); 
    }
}); 


///// Listings Routes /////
app.get('/api/12listings', async (req, res) => {
    try {
      const result = await tinyAway12(); 
      console.log(res.json(result)); 
      
  } catch (error) {
    console.error(error);
    res.status(500).send('Tinyaway Mongo Failed');
  }
}); 