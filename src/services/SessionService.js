

export const authenticate = (email, password) => {

  return new promise((success, reject) => {
    setTimeout(() => {
      if (email && password) {
        success({
          user: {},
          token: 'token lol',
        });
      } else {
        reject();
      }
    }, 1000);
  });

}
