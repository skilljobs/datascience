module.exports = {
  apps: [
    {
      name: 'datascience',
      exec_mode: 'cluster',
      instances: 2,
      script: 'npm',
      args: 'run start:prod',
      env: {
        NODE_ENV: 'production',
        PORT: 3085,
      },
    },
  ],
};