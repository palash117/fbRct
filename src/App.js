import logo from "./logo.svg";
import "./App.css";
import "./firebase";

// redux
import { Provider } from "react-redux";
import store from "./store";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import LoginAlert from "./components/LoginAlert";
import TransactionContainer from "./components/TransactionContainer";
var firebase = global.firebase;
function App() {
  console.log("firebase is ", firebase);
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar></NavBar>
        <LoginAlert></LoginAlert>
        <TransactionContainer></TransactionContainer>
      </div>
    </Provider>
  );
}

export default App;
