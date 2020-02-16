//const axios = require('axios');

exports.handler = async (event, context) => {
  console.log('deploy-succeeded');
  console.log('event', event);
  console.log('context', context);
  console.log(process.env.TEAMS_WEBHOOK);
  return {
    statusCode: 200,
    body: JSON.stringify({
      data: true
    })
  };
};
