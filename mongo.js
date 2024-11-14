const { MongoClient } = require('mongodb');


async function connectToMongoDB() {

  const uri = 'mongodb+srv://<user>:pw@mental-health-ai.7tml2.mongodb.net/?retryWrites=true&w=majority&appName=Mental-Health-AI';
  const client = new MongoClient(uri);

  try {
    await client.connect();
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}


connectToMongoDB();