const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const DATABASE_URL='mongodb+srv://sahil:sahil@realestate.1jaxzuk.mongodb.net/RealEstate';
dotenv.config();
//connect to DB
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})


app.listen(8000, () => console.log('Server running......'));