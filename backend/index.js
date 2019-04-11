import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/yachtRoutes';

const app = express();
const PORT = 3000;

// Mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/SailingLife');

// Bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));

routes(app);

// Serving static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`The express server is running on port ${PORT}`);
});

app.listen(PORT, () => 
    console.log(`your server is running on port ${PORT}`)
);
