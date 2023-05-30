const wait = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done');
    }, ms);
  });
};

module.exports = { wait };
