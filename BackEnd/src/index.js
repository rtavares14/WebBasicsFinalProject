// Modules required and express initialization
import express from 'express';
import albumRouter from './routers/album-router.js';
import trackRouter from "./routers/track-router.js";
import artistRouter from "./routers/artist-router.js";
import cors from 'cors';

// Initializing express and creating the port variable
const app = express();
const port = 3000;

// CORS will make possible to access the front end by the back end
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}))

// Use the albumRouter to handle all the albums rated routes
app.use('/albums', albumRouter);

// Use the trackRouter to handle all the tracks rated routes
app.use('/tracks', trackRouter);

// Use the artistRouter to handle all the artists rated routes
app.use('/artists', artistRouter);


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



