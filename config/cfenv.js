
// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv

// get the app environment from Cloud Foundry
var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();
var localCredencials = {};

try {
  localCredencials = require('../config/watson-credentials.json') || {};
} catch (e) {
  console.log("there isn't local watson settings");
}

module.exports = {
  cfEnv: appEnv,
  getService: function (service) {
    if (localCredencials[service]) return localCredencials[service];
    return appEnv.getService(service);
  }
};
