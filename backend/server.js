import 'dotenv/config'; 
import express from 'express';

const app = express(); 

// Start Listening on Port for API Calls 
app.listen(process.env.PORT, () => {
    console.log('hello sweetie'); 
}); 
