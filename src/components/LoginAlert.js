import { Alert } from "react-bootstrap";
import React from "react";
import { connect } from "react-redux";

const LoginAlert = ({ showLogin, user }) => {
  if (showLogin) {
    return (
      <Alert variant="success">
        <Alert.Heading>Hey, nice to see you {user.name}</Alert.Heading>
        <p>Welcome!!!</p>
        <hr />
        <p className="mb-0">logout whenever you are ready</p>
      </Alert>
    );
  }
  return null;
};
const mapReduxStateToProps = (reduxState) => ({
  showLogin: reduxState.auth.showLoginModal,
  user: reduxState.auth.userData,
});
export default connect(mapReduxStateToProps, null)(LoginAlert);
