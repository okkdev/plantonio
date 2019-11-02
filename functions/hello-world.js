exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ data: 'Hello, World Henning du geile Sau' })
  })
}
