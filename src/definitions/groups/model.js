import { getConnection } from '../../mongo';


export const getGroupById = id => new Promise((resolve, reject) => {
  getConnection()
    .collection('groups')
    .findOne({ _id: id })
    .toArray((err, docs) => {
      if (err) reject(err);
      console.log(docs)
      debugger;
      resolve(docs);
    });
});

export const getGroups = () => new Promise((resolve, reject) => {
  getConnection()
    .collection('groups')
    .find({})
    .toArray((err, docs) => {
      if (err) reject(err);
      console.log(docs)
      debugger;
      resolve(docs);
    });
});
