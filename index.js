var url = 'https://status.github.com/api/status.json';
var https = require('https');

https.get(url, function(response) {
    var body = '';

    response.on('data', function(chunk) {
        body += chunk;
    });

    response.on('end', function() {
        var github_response = JSON.parse(body);
        if(github_response.status === 'good'){
          console.log('Everything is okay, Github should be up!\n' +
                      'Last updated at : ' + github_response.last_updated);
        } else if(github_response.status === 'minor'){
          console.log('There are some minor issues with Github at the moment!\n' +
                      'Last updated at : ' + github_response.last_updated);
        }else{
          console.log('Github is facing some major issues right now!\n' +
                      'Last updated at : ' + github_response.last_updated);
        }
    });
}).on('error', function(e) {
      console.log("Got error: ", e);
});