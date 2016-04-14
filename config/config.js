var config = {

    /**
     * 生产环镜
     */
    production: {

    },


    /**
     * 开发环镜
     */
    development: {
        database: {
            dbname: 'jimliu',
            username: 'jimliu',
            password: 'jimliu',
            connection: {
                dialect: "mysql",
                host: '112.124.7.87',
                port: 3306,
                logging: false
            }
        }
    },

    /**
     * 返回或设置当前环镜
     */
    env: function () {
      if (__DEV_MODE__) {
        global.$config = this.development;
      } else {
        global.$config = this.production;
      }
      return global.$config;
    }
};

module.exports = config.env();
