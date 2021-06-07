// Handle errors that they already may occure inside the routes. 
// When we call next(err), the error will be sent to this error handler.
export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).send({
        message: err.message,
        stack: process.NODE_ENV === 'production' ? null : err.stack
    });
};

// It will target any route that is not defined in the server
export const notFound = (req, res, next) => {
    const err = new Error(`${req.originalUrl} not found!`);
    res.status(404);
    next(err);
};