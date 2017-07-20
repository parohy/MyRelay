import { map } from 'lodash';
import admin from 'firebase-admin';
import serviceAccount from './adminkey.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-functions-example-5efdb.firebaseio.com"
});

const mapSnapshotToEntity = snapshot => ({ id: snapshot.key, ...snapshot.val() });
const mapSnapshotToEntities = snapshot => map(snapshot.val(), (value, id) => ({ id, ...value }));

const ref = path => admin.database().ref(path);
const getValue = path => ref(path).once('value');
const getEntity = path => getValue(path).then(mapSnapshotToEntity);
const getEntities = path => getValue(path).then(mapSnapshotToEntities);

const pushEntity = (path, entity) => {
  const entityRef = ref(path).push();
  entityRef.set({ id: entityRef.key, ...entity });
  return getEntity(`${path}/${entityRef.key}`);
};

const createFriendship = (cur_id, fr_id) => {
  const currentUserRef = ref(`users/${cur_id}`);
  const friendUserRef = ref(`users/${fr_id}`);

  const currentUser = currentUserRef.once('value')
  .then(mapSnapshotToEntity)
  .then(user => {
    user.friends ? user.friends.push(fr_id) : user.friends = [fr_id];
    currentUserRef.update({ friends: user.friends });
  });

  const friendUser = friendUserRef.once('value')
  .then(mapSnapshotToEntity)
  .then(user => {
    user.friends ? user.friends.push(cur_id) : user.friends = [cur_id];
    friendUserRef.update({ friends: user.friends });
  });

  return currentUserRef.once('value').then(mapSnapshotToEntity);
}

const resolveFunctions = {
  Query: {
    users: () => getEntities('users'),
    user: (_, { id }) =>  getEntity(`users/${id}`)
  },
  Mutation: {
    createUser: (_, entity) => pushEntity('users', entity),
    friendUser: (_, { current, friend }) => createFriendship(current, friend)
  },
  User: {
    friends: (user) => {
      try{
        const { friends = [] } = user;
        const result = friends.map(id => getEntity(`users/${id}`));
        return result;
      } catch(err) {
        console.log('getFriends ERR >',err);
      }
      return [];
    }
  }
};

export default resolveFunctions;
