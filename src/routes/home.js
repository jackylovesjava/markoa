/**
 * Created by jimliu on 2016/4/15.
 */
import marko from 'marko';
const homeTemplate = marko.load(require.resolve('../views/templates/home/index.marko'));

export const home = async (ctx, next) => {
    ctx.body = homeTemplate.stream();
    ctx.type = 'text/html';
    await next();
};