const PORT = 3333;
const app = require('./app.cjs');

app.listen(PORT, () => console.log(`listening to port ${PORT}`));