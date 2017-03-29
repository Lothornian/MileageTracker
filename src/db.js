import { MongoClient } from 'mongodb';

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/milage';

const connect = async () => await MongoClient.connect(mongoUri);

export default connect;

export const getCollection = async (collectionIWant) => {
  const db = await connect();
  return db.collection(collectionIWant);
};

export const closeDb = async () => {
  const db = await connect();
  await db.close();
}
