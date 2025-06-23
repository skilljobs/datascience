// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'datascience',
      exec_mode: 'cluster',
      instances: 2,
      script: 'npm',
      // “--” tells npm to forward what follows into your start script
      args: 'start -- -p $PORT',
      env: {
        NODE_ENV: 'production',
        PORT: 3085,       // <— your desired port
      },
    },
  ],
};
