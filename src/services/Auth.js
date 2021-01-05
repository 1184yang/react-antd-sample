const currentUserPoolUser = () => {
  return new Promise((resolve, reject) => {   
    const user = JSON.parse(localStorage.getItem('signin'));

    resolve(user);
  });
}

const signIn = (username, password) => {
  return new Promise((resolve, reject) => {
    const user = {
      username: username,
      email: `${username}@example.com`,
      phone_number: (Math.random() * 1000000000).toFixed()
    };
    console.log(`User Sign in: ${user}`);
    localStorage.setItem('signin', JSON.stringify(user));
    // await
    resolve(user);
  });
};

const signUp = (username, password, email, phone_number = '') => {
  return new Promise((resolve, reject) => {
    const user = {
      username: username,
      password: password,
      email: email,
      phone_number
    };

    console.log(`Save: ${user}`);
    resolve({save: true});
  });
};

const confirmSignUp = (username, confirmationCode) => {
  return new Promise((resolve, reject) => {
    const confirmUser = {
      username: username,
      confirmationCode: confirmationCode
    };

    console.log(`confirmation: ${confirmUser}`);
    resolve({ confirmationCode: true });
  });
};

const forgotPassword = (username) => {
  return new Promise((resolve, reject) => {
    const forgetPasswordUser = {
      username: username
    };

    console.log(`Forget Password User: ${forgetPasswordUser}`);
    resolve({ forgetPasswordUser: true });
  });
};

const forgotPasswordSubmit = (username, confirmationCode, password) => {
  return new Promise((resolve, reject) => {
    const confirmUser = {
      username: username,
      confirmationCode: confirmationCode
    };

    console.log(`confirmation: ${confirmUser}`);
    resolve({ confirmationCode: true });
  });
};

const signOut = () => {
  return new Promise((resolve, reject) => {
    localStorage.removeItem('signin');
    resolve({signOut: true});
  });
}

const Auth = {
  signIn,
  signUp,
  confirmSignUp,
  forgotPassword,
  forgotPasswordSubmit,
  currentUserPoolUser,
  signOut
}

export default Auth;