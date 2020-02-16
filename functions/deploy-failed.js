const axios = require('axios');

exports.handler = async event => {
  const { payload } = JSON.parse(event.body);

  await axios.post(process.env.TEAMS_WEBHOOK, {
    '@type': 'MessageCard',
    '@context': 'http://schema.org/extensions',
    themeColor: 'FF0000',
    summary: 'Deployment failed on Netlify',
    title: payload.title,
    sections: [
      {
        title: 'Details',
        facts: [
          {
            name: 'Created at',
            value: new Date(payload.created_at).toLocaleString()
          },
          {
            name: 'Github Commit',
            value: `[Click here to open](${payload.commit_url})`
          }
        ]
      }
    ],
    potentialAction: [
      {
        '@type': 'OpenUri',
        name: 'Deploy log',
        targets: [
          {
            os: 'default',
            uri: `${payload.admin_url}/deploys/${payload.id}`
          }
        ]
      }
    ]
  });
  return {
    statusCode: 200,
    body: JSON.stringify({ data: true })
  };
};
