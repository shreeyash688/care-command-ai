/**
 * Global error handler middleware.
 * Must be registered after all routes.
 * Handles Mongoose validation/cast errors and custom statusCode.
 */
export const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode ?? 500;
  let message = err.message ?? 'Internal Server Error';

  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = Object.values(err.errors)
      .map((e) => e.message)
      .join('; ');
  } else if (err.name === 'CastError') {
    statusCode = 400;
    message = 'Invalid id or data format';
  }

  if (process.env.NODE_ENV !== 'production') {
    console.error(err.stack);
  }

  res.status(statusCode).json({
    success: false,
    error: message,
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
  });
};

/**
 * 404 handler for unknown routes.
 */
export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
};
