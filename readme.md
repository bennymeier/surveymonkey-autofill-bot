# SurveyMonkey.com auto fill bot

## Getting Started

### Installation
```bash
npm i
# or 
yarn
```
### Change URL
Go to index.js in root folder and change the variable URL to your SurveyMonkey URL.

### Search your elements
Search for your survey questions and then find the right element you want to select, check or fill out.
In ``` utils/``` you find modules which sets radio buttons to ``` checked = true```.

### Start Server
```bash
npm run start
# or 
yarn start
```

### Open URL in Browser
```bash
http://localhost:4000/fill or your env. port
```

### Auto submit with setInterval
Insert the code below into the console of e.g. Google Chrome. Every 8s the page sends a GET-Request to the "API".
```javascript
setInterval(async () => {
    await fetch('http://localhost:4000/fill', 
    { method: 'GET' });
}, 8000);
```