const {logger} = require('./logger');
app.get('/api', (req, res) => {
  logger.log('info', 'Hello distributed log files!', 
    { 'serviceName':'backend', 'TraceId': req.header('X-B3-TraceId'), 'SpanId': req.header('X-B3-SpanId') });
  res.send(new Date().toString())
});
