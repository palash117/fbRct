import { updateData } from "../redux/actions/txn";
import store from "../store";

var firebase = global.firebase;
const { serverTimestamp } = firebase.firestore.FieldValue;
const db = firebase.firestore();
var Timestamp = firebase.firestore.Timestamp;
var subscribe = (user) => {
  var changesRef = db.collection("change");
  var unsubscribe = changesRef
    .where("uid", "==", user.uid)
    .onSnapshot((querySnapshot) => {
      const items = querySnapshot.docs.map((doc) => {
        var data = doc.data();
        return {
          name: data.name,
          amount: data.amount,
          createdAt: new Date(data.createdAt.toDate()),
        };
      });
      console.log("items", items);
      store.dispatch(updateData(items));
    });
  return unsubscribe;
};

var addChange = ({ uid, name, amount }) => {
  var changesRef = db.collection("change");
  changesRef.add({
    uid: uid,
    name: name,
    amount: amount,
    createdAt: serverTimestamp(),
  });
};

export { subscribe, addChange };
