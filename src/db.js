import { MongoClient } from 'mongodb';

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:32768/milage';

const connect = async () => await MongoClient.connect(mongoUri);

export default connect;

export const collection = async (collection) => {
  const db = await connect();
  return db.collection(collection);
};
