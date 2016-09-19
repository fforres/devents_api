import mongo from 'mongodb';
import { getConnection } from '../../mongo';

export const getEventById = id => new Promise((resolve, reject) => {
  const searchId = new mongo.ObjectID(id);
  getConnection()
    .collection('events')
    .findOne({ _id: searchId }, (err, docs) => {
      if (err || !docs) reject(err);
      resolve(docs);
    });
});


export const getEventByGroupId = id => new Promise((resolve, reject) => {
  const searchId = new mongo.ObjectID(id);
  getConnection()
    .collection('events')
    .findOne({ group: searchId }, (err, docs) => {
      if (err || !docs) reject(err);
      resolve(docs);
    });
});


export const getEvents = () => new Promise((resolve, reject) => {
  console.log({
    time: {
      $gt: Date.now(),
    },
  });
  getConnection()
    .collection('events')
    .find({
      time: {
        $gt: Date.now(),
      },
    })
    .toArray((err, docs) => {
      if (err) reject(err);
      resolve(docs);
    });
});
