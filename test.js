const WebSocket = require('ws');
const DerivAPI = require('@deriv/deriv-api/dist/DerivAPI'); // Correct import

const connection = new WebSocket('wss://ws.derivws.com/websockets/v3?app_id=70223'); // Use your app_id
const api = new DerivAPI({ connection });

api.basic.ping().then(console.log).catch(console.error);
