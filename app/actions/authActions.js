/**
 * @flow
 */

import authService from '../../core/services/authService';

 export function login(email, password) {
   return function(dispatch) {

     authService.login(email, password)
        .then(function() {
          dispatch({
            type: "LOGIN_SUCCESS"
          });
        }).catch(function(err) {
          dispatch({
            type: "LOGIN_FAILED",
            errorMessage: err.message
          });
        });

   }

}

export function logOut(email, password) {
  return function(dispatch) {

    authService.logOut(email, password)
       .then(function() {
         dispatch({
           type: "LOGOUT_SUCCESS"
         });
       }).catch(function(err) {
         dispatch({
           type: "LOGOUT_FAILED",
           errorMessage: err.message
         });
       });

  }

}
