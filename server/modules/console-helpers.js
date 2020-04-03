const clc = require('cli-color');

/* eslint-disable no-console */
module.exports = {
  colorizeConsole: () => {
    const mapping = {
      log: clc.white,
      info: clc.blueBright,
      warn: clc.yellowBright,
      error: clc.redBright,
    };

    Object.keys(mapping).forEach((method) => {
      const oldMethod = console[method].bind(console);

      console[method] = (...args) => {
        oldMethod.apply(
          console,
          [mapping[method](...args)],
          // .concat(...args),
        );
      };
    });
  },
};
