import * as actions from "./actionTypes";
import firebase from "../../services/FirebaseConfig";

export const SignUp = (email, password) => async (dispatch) => {
  try {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((dataBeforeEmail) => {
        firebase.auth().onAuthStateChanged(function (user) {
          user.sendEmailVerification();
        });
      })
      .then((dataAfterEmail) => {
        firebase.auth().onAuthStateChanged(function (user) {
          if (user.emailVerified) {
            // email verified
            dispatch({
              type: actions.signUpSucces,
              payload:
                "Your account was successfully created. Please verify your email!",
            });
          } else {
            // email not verified
            dispatch({
              type: actions.signUpError,
              payload:
                "Something went wrong, we couldn't create your account. Please try again!",
            });
          }
        });
      });
  } catch (err) {
    dispatch({
      type: actions.signUpError,
      payload:
        "Something went wrong, we couldn't create your account. Please try again!",
    });
  }
};
