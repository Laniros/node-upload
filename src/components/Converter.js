const express = require('express');
const app = express();
var AWS = require('aws-sdk');

app.get('/download-file', function (req, res) {

  // sdk way
  var s3 = new AWS.S3({});
  var options = {
    Bucket: 'video-to-audio-lanir',
  };
  s3.getObject(options, function (err, data) {
    try{
      console.log(res)
    res.setHeader('Content-disposition', `inline; filename="search.png"`);
    res.end(data.Body, 'binary');

    }catch{
      console.log(err)
    }
  });
});