# React-TinyUrl
## Setup:

```
git clone https://github.com/lzlmike/React-TinyUrl.git
```
### Start fake server:
Navigate to fake-api-server directory:
```$ cd fake-api-server```

Install all npm package in fake-api-server:
```$ npm install```

Run all three fake server in three terminals:
```$ node server.js``` ```$ node server2.js``` ```$ node server3.js```

### Install Nginx:
Navigate to React-TinyUrl directory from fake-api-server: 
```$ cd ..```

Install all npm package (make sure you have node installed): 
```$ npm install```

Looking at package.json, there are serveral scripts that help you to install and run nginx.

Install nginx:
```$ npm run getNginx```

Copy local customized nginx.conf file to the nginx default file:
```$ npm run updateNginx```

Now nginx is already up since the updateNginx script will start the nginx after copy file. If nginx doesn't run, try:

```$ npm run stoptNginx``` then ```$ npm run startNginx```

### Run the app"
```$ npm run start ```

open ./public/index.html in browser and see the app is running.
