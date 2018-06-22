// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgress:///g-mem-1'
  },

  
  production: {
    client: 'pg',
    connection: 'process.env.DATABASE_URL' + '?ssl=true'
  }
};
