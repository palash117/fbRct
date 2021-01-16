import { login, logOut } from "../redux/actions/auth";
import store from "../store";
var firebase = global.firebase;
console.log("firebae from auth is ", firebase);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("logged in user is ", user);
    store.dispatch(login(user));
  } else {
    store.dispatch(logOut());
  }
});
const success = true;

const signin = () => {
  console.log("signing in");
  auth.signInWithPopup(provider);
};

const signout = () => {
  auth.signOut();
};

export { signin, signout };

// export default success;
