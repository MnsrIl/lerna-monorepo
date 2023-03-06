const server = require("../fish-server");
const shared = require("../fish-shared");

const sharedLog = 'shared: ' + shared + '\n';
const serverLog = 'server: ' + server + '\n';
const clientLog = 'client: ' + 'Hi, Im client';

console.log(serverLog, sharedLog, clientLog);