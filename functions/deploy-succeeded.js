const axios = require('axios');

exports.handler = async event => {
  const { payload } = JSON.parse(event.body);

  await axios.post(process.env.TEAMS_WEBHOOK, {
    '@type': 'MessageCard',
    '@context': 'http://schema.org/extensions',
    themeColor: '28A745',
    summary: 'New deployment on Netlify',
    title: payload.title,
    sections: [
      {
        title: 'Details',
        facts: [
          {
            name: 'Published at',
            value: new Date(payload.published_at).toLocaleString()
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
      },
      {
        '@type': 'OpenUri',
        name: 'Preview deploy',
        targets: [
          {
            os: 'default',
            uri: payload.url
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
