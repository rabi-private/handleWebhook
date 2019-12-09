"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const axios = require('axios');
const line = require('@line/bot-sdk');
var _ = require('lodash');

const restService = express();
 
const config={
  channelAsscessToken : 'DECQRCLgLIoV4NSMXcYDYSYnAbhbC7Gq02Shn0vNXlBcS1APqaU+C+7EECF+cjy9Tx8YfVQ1Ar5QU6OQQNu6KpI+G/QrZ+faHZbRvkrmcq3p770g8SxVbek7Uqyq1OdxlMeyfFc11T9OcV1SsS9KJAdB04t89/1O/w1cDnyilFU=',
  channelSecret:'c4092667959ac69a784406125e736e5e'
}

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);
restService.use(bodyParser.json());

restService.post("/linewebhook", function(req, res) {
   var body = ''
   if (_.isEmpty(req.body)){
    body = 'nothing'
   }else {
    body =req.body
   }
    axios.post('https://kurapitalcrmwebhook.tk/api/v1/receivefromnode', body)
    .then(response => {
    laravelResponse = response;
    console.log(response)
    })
    .catch(error => {
    console.log(error);
    });
  return res.json({
    body,
  });
  
});
const port = process.env.PORT || 5000;

// Start the app
restService.listen(port, () => {
  console.log('App started on port: ' + port);
});
/*
restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
*/
