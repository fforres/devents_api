import mongo from 'mongodb';
import { getConnection } from '../../mongo';

export const getGroupById = id => new Promise((resolve, reject) => {
  const searchId = new mongo.ObjectID(id);
  getConnection()
    .collection('groups')
    .findOne({ _id: searchId }, (err, docs) => {
      if (err || !docs) reject(err);
      resolve(docs);
    });
});

export const getGroups = () => new Promise((resolve, reject) => {
  getConnection()
    .collection('groups')
    .find({})
    .toArray((err, docs) => {
      if (err) reject(err);
      resolve(docs);
    });
});
