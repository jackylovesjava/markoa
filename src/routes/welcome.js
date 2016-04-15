import marko from 'marko';
const welcomeTemplate = marko.load(require.resolve('../views/templates/welcome/index.marko'));

const getName = () => new Promise(resolve => {
  setTimeout(() => resolve('Leon'), 3000);
});

const yourName = () => new Promise(resolve => {
  setTimeout(() => resolve('Someone else'), 1000);
});

//export function *welcome(next) {
//  let count = this.session.count || 0;
//  this.log.debug('Current user session count would be %s', count);
//  this.body = welcomeTemplate.stream({getName, yourName, count});
//  count = this.session.count = ++count;
//  this.type = 'text/html';
//  yield next;
//}

export const welcome = async (ctx, next) => {
  let count = ctx.session.count || 0;
  // ctx.log.debug('Current user session count would be %s', count);
  ctx.body = welcomeTemplate.stream({getName, yourName, count});
  count = ctx.session.count = ++count;
  ctx.type = 'text/html';
  await next();
};