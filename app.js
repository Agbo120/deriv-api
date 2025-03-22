const { DerivAPI } = require('@deriv/deriv-api');


// WebSocket connection to Deriv API
const api = new DerivAPI({
    app_id: 70223,  // Replace with your App ID from Deriv
    endpoint: 'wss://ws.binaryws.com/websockets/v3',
});

// Check if connected
api.connection.open().then(() => {
    console.log("Connected to Deriv API");
}).catch(err => console.error("Connection error:", err));


