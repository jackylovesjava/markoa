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
            dbname: 'bokeh',
            username: 'bokeh_user',
            password: 'coms3dev',
            connection: {
                dialect: "mysql",
                host: '192.168.10.85',
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
