/**
 * Created by jimliu on 2016/4/15.
 */
import marko from 'marko';
const signupTemplate = marko.load(require.resolve('../views/templates/signup/index.marko'));

export const signup = async (ctx, next) => {
    ctx.body = signupTemplate.stream();
    ctx.type = 'text/html';
    await next();
};