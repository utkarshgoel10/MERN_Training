## Replace the scripts in package.json of your project

### For those devices in which nodemon runs perfectly:
```  
"scripts": {
    "start": "node backend/server",
    "server": "nodemon backend/server",
    "client": "npm start --prefix frontend",
    "dev": "concurrently \"npm run server\" \"npm run client\"",
  },
```

### For those devices in which <code>nodemon not found</code> error is shown:
```
  "scripts": {
    "start": "node backend/server",
    "server": "npx nodemon backend/server",
    "client": "npm start --prefix frontend",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
```
