import "dotenv/config";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

async function main() {
  try {
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");

    const result = await movies.find().toArray();
    console.log(result);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
