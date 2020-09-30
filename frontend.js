const {logger} = require('./logger');
app.get('/', (req, res) => {
  zipkinRest('http://localhost:9000/api')
    .then(response => {
      logger.log('info', 'Hello distributed log files!', 
        { 'serviceName':'frontend', 'TraceId': req.header('X-B3-TraceId'), 'SpanId': req.header('X-B3-SpanId') });
      res.send(response.entity);
    })
    .catch(err => logger.error('Error', err.stack));
});
