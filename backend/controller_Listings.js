import client from "./mongoclient.js"; 


export default async function tinyAway12() {
    const listings = await client.db("ta_listings").collection("listings").find({}).limit(12).toArray(); 
    return listings; 
}
  
