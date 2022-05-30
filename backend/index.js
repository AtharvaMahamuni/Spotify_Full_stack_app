const app = require('./app');

const {PORT} = process.env;

app.listen(PORT, () => console.log("App is listning on http://localhost:4000/api/v1/"));

