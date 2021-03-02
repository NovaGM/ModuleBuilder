import * as https from 'https';

export default () => {
  const data = JSON.stringify({
    username: 'NovaStore',
    embeds: [
      {
        title: 'Module Store Updated',
        url: 'https://goose.lexisother.tk/nova.json',
        timestamp: new Date(),
        author: {
          name: 'Nova Module Store',
          icon_url: 'https://goosemod.com/img/logo.jpg',
        },
      },
    ],
  });

  const options = {
    hostname: 'discord.com',
    path: `/api/webhooks/816327784121106452/${process.env.HOOKTOKEN}`,
    port: 443,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
    },
  };

  const req = https.request(options, (res) => {
    console.log(`Status code: ${res.statusCode}`);

    res.on('data', (d) => {
      process.stdout.write(d);
    });
  });

  req.on('error', (err) => {
    console.error(err);
  });

  req.write(data);
  req.end();
};
