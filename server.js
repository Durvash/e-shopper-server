const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

require('./app/config/routes')(app);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});