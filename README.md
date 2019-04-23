## Overview
ngrok tunneling service with a qr generation component. Launches new ngrok session with specified port, logs out url and generates a qr code with url data. This qr code is written to a png file in a tmp location then file path is outputed into the console.


## Installing
`npm install --global mstark5652/ngrokqr`

## Running
`ngrokqr` to launch an ngrok session with port 8080
`ngrokqr --port=5000` to launch an ngrok session with port 5000

## Arguments
* port - Port to launch ngrok on `--port=8080` default is 8080


## Dependencies
* `ngrok` https://github.com/bubenshchykov/ngrok
* `awesome-qr` https://github.com/mstark5652/Awesome-qr.js forked from https://github.com/SumiMakito/Awesome-qr.js
* `command-line-parser` https://github.com/mstark5652/command-line-parser

## License
MIT License - See LICENSE.md
