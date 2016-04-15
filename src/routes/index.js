import koaRouter from 'koa-router';
// Export the koa-router functions
export const router = koaRouter();

// Import the generator functions from each route
import {home} from './home';
import {signup} from './signup';

// Define rules for each route

router.get('/', home);
router.get('/signup', signup);
