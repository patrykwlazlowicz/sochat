function createErrorEnum(name) {
  return {
    error: true,
    type: name
  };
}

module.exports = {
  user: {
    dontExist: createErrorEnum('user.dont.exist'),
    alreadyExist: createErrorEnum('user.already.exist'),
    alreadySignIn: createErrorEnum('user.already.sign.in'),
    wrongPassword: createErrorEnum('user.wrong.password')
  }
};
