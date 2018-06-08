require("dotenv").config();

exports.handler = function(event, context, callback) {
  console.log(event);
  const { code } = event.queryStringParameters;
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ result: `${process.env.HELLO} ${code}` })
  });
};
