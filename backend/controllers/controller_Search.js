import client from "../mongoclient.js"; 


export async function allStates() {
    const states = await client.db("ta_listings").collection("listingStates").find({}).toArray(); 
    return states; 
}

export async function allCities() {
    const cities = await client.db("ta_listings").collection("cities").find({}).toArray(); 
    return cities; 
}