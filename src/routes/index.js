import koaRouter from 'koa-router';
// Export the koa-router functions
export const router = koaRouter();

// Import the generator functions from each route
import {welcome} from './welcome';
import {home} from './home';

// Define rules for each route

router.get('/', home);
router.get('/welcome', welcome);
