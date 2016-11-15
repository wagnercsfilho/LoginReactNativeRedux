/**
 * @flow
 */

export default {
  login(email, password) {
    return new Promise((resolve, reject) => {
      if (email == "teste@teste.com" && password == "teste") {
        resolve({email, password});
      } else {
        reject({message: "Api Login failed!"});
      }
    });
  }
}
