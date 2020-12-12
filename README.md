# rest-rsa-service

## Installation

This is a [Node.js](https://nodejs.org/en/) program.
This is a RSA key generation service to use in SSH authentication applications.

Before using, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 8.0 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install
```

## Quick Start

  The quickest way to get started with RSA Rest API service is starting server with:

```bash
$ npm start
```
  Service URL is: http://localhost:8080

## Options

The only option is key lenght that could be 256,512,1024,2048 and 4096.

## Response 

Response is in JSON format, Here is sample reponse:
```json
{
    "public": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAAIQDMI5gpIDUBMZzA+a2A+GjednOj377VVJ/q0u9tw/F/YQ== \n",
    "private": "-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAANwAAAAdzc2gtcn\nNhAAAAAwEAAQAAACEAzCOYKSA1ATGcwPmtgPho3nZzo9++1VSf6tLvbcPxf2EAAACoAAAA\nAAAAAAAAAAAHc3NoLXJzYQAAACEAzCOYKSA1ATGcwPmtgPho3nZzo9++1VSf6tLvbcPxf2\nEAAAADAQABAAAAIQCRvQewtLGivIywqI/Z937Fq9paSYrxAIOjjOIx4S4mEQAAABBMeKE2\n2llUrliEu0WRo259AAAAEQD7kV0LxqFrMJdsiVy6JRZ/AAAAEQDPvFCRXSYVOaOhjABuJT\nofAAAAAAEC\n-----END OPENSSH PRIVATE KEY-----\n"
}
```

## cURL

  Here is how to call service with cURL.

```bash
  curl --location --request POST 'http://localhost:8080/openssh/generate' \
--header 'Content-Type: application/json' \
--data-raw '{"lenght":"256"}'
```

## JavaScript

```js
var data = JSON.stringify({"lenght":"256"});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://localhost:8080/openssh/generate");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
```