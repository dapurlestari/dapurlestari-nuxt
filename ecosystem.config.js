module.exports = {
    apps: [
      {
        name: 'DapurLestari',
        port: '3030',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
}