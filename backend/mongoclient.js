import { config } from 'dotenv'; 
import { MongoClient, ServerApiVersion } from 'mongodb';

// Connect to MongoDB 
config(); 
const port = process.env.PORT; 
const mongoURI = process.env.MONGO_URI; 
const client = new MongoClient(mongoURI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  export default client; 

// Test function to check connection to database 
// async function main(){

//     async function listDatabases(client){
//         databasesList = await client.db().admin().listDatabases();
    
//         console.log("Databases:");
//         databasesList.databases.forEach(db => console.log(` - ${db.name}`));
//     };

//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();

//         // Make the appropriate DB calls
//         await  listDatabases(client);

//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);