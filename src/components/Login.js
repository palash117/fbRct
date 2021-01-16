import React from "react";
import { signin, signout } from "../firebase/auth";
import { connect } from "react-redux";

const Login = ({ loggedIn }) => {
  //   const [state, setstate] = useState(false);
  var login = signin;
  var logout = signout;
  var onclick = loggedIn ? logout : login;
  var buttonStr = `${loggedIn ? "Logout from" : "Login with"} google`;
  return (
    <button type="button" className="btn btn-primary" onClick={onclick}>
      <i className="fab fa-google mr-2">{buttonStr}</i>
    </button>
  );
};
const mapReduxStateToProps = (reduxState) => ({
  loggedIn: reduxState.auth.loggedIn,
});
export default connect(mapReduxStateToProps, null)(Login);
