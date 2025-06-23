
module.exports = {
    apps: [
        {
            name: 'datascience',
            exec_mode: 'cluster',
            instances: 2, // max Or a number of instances
            script: 'npm',
            args: 'start',
            env: {
                NODE_ENV: 'production', // Environment variable for production
                PORT: 3085, // Define a specific port if necessary
            },
        }
    ]
}