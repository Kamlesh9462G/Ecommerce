const errorHandler = (err, req, res, next) => {
  let { statusCode, message } = err;
  const response = {
    /*code: statusCode,*/
    message,
    data: [],
  }
  res.status(statusCode).send(response);
};

module.exports = {
  errorHandler,
};
