const currentUserPoolUser = () => {
  return new Promise((resolve, reject) => {   
    //const user = JSON.parse(localStorage.getItem('signin'));
    const user = {username: 'Hello Kitty', email: 'kitty@example.com'};
    if (user) {
      resolve(user);
    } else {
      reject(new Error('not sign in'));
    }
  });
}

const x = currentUserPoolUser();
console.log(x);