#!/usr/bin/env node 

//Load Required library
const wst = require("../lib/wst_wrapper").server_reverse;

//INSTANCE A NEW WEBSOCKET TUNNEL REVERSE SERVER OBJECT
//IN THE NEW VERSION YOU NEED TO SPECIFY THE PORT AT DEFINITION
//TIME
let server = new wst(8888);

//STARTS THE SERVER ON THE PORT 8888
server.start();
