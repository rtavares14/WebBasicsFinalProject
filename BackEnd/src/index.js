// Modules required and express initialization
import express from 'express';
import mainPageRouter from './routers/main-page-router.js';
import toListeningRouter from './routers/to-listening-router.js';
import cors from 'cors';
import {albumsToListening} from "./data/dummy-date.js";

// Initializing express and creating the port variable
const app = express();
const port = 3000;

// CORS will make possible to access the front end by the back end
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}))

// Use the user mainPageRouter to handle all the albums rated routes
app.use('/albums', mainPageRouter);

// Use the user toListeningRouter to handle all the albums to listening routes
app.use('/tolistening', toListeningRouter);

// Global error handler middleware
app.use(function (err, req, res, next) {
    res
        .status(err.status || 500)
        .json({
            message: err.message || "Something went wrong..."
        });
});

// Start the server
app.listen(port, function() {
    console.log(`Server listening on port ${port}!`);
});



