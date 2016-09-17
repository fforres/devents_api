import mongo from 'mongodb';

let DatabaseConnection = null;
const MongoClient = mongo.MongoClient;
const url = `mongodb://localhost:27017/devents`;
// mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]


const start = () => new Promise((resolve, reject) => {
  MongoClient.connect(url, (err, db) => {
    if (err) reject(err);
    DatabaseConnection = db;
    resolve(db);
  });
});

export const getConnection = () => DatabaseConnection;

export default start;
