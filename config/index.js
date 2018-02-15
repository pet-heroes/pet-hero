const { NODE_ENV: env } = process.env;
module.exports = env === 'production' ? require('./prod.config.js') : require('./dev.config.js');
