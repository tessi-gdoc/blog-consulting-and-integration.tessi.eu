const axios = require('axios');

const netlifyUser = {
  name: `Netlify Tessi`,
  uid: `netlify-tessi`
};

exports.handler = async event => {
  const { payload } = JSON.parse(event.body);

  await axios.post(process.env.TEAMS_WEBHOOK, {
    '@type': 'MessageCard',
    '@context': 'http://schema.org/extensions',
    themeColor: 'FF0000',
    summary: 'Echec déploiement sur Netlify',
    title: `[${payload.name}] Déploiement échoué sur la branche ${payload.branch}`,
    text: payload.title,
    sections: [
      {
        title: 'Détails',
        facts: [
          {
            name: 'Publié par',
            value: `[${payload.committer ||
              netlifyUser.name}](https://github.com/${payload.committer || netlifyUser.uid})`
          },
          {
            name: "Message d'erreur",
            value: payload.error_message
          },
          {
            name: 'Commit Github',
            value: `[${payload.commit_ref}](${payload.commit_url})`
          }
        ]
      }
    ],
    potentialAction: [
      {
        '@type': 'OpenUri',
        name: 'Logs du déploiement',
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
