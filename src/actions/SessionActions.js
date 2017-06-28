import {authenticate} from '../services/SessionService';
import {setSession, getSession} from '../store';

export const SIGN_IN_REQUEST = SESSION::SIGN_IN;

export const SIGN_IN_SUCCESS = SESSION::SIGN_IN::SUCCESS;

export const SIGN_IN_FAIL = SESSION::SIGN_IN::FAIL

export const SIGN_OUT = SESSION::SIGN_OUT;

const userSignInSuccessful (response) => {

  const {user, token} = response;

  return {
    type: SIGN_IN_SUCCESS,

    payload: {
      token,
      user,
    },
  },
}

const userSignInFailed (error) => {

  return {
    type: SIGN_IN_FAIL,

    payload : {
      error.
    },
  },
}

const signInUser (credentials) => {
  const {email, password} = credentials;

  return (dispatch) => {
      dispatch ({type : SIGN_IN_REQUEST });

      authenticate(email, password)
      .then ((response) => {
       setSession(response);

       dispatch(userSignInSuccessful(getSession()));
      })
      .catch((error) => dispatch(userSignInFailed(error.message)));
  }

}
