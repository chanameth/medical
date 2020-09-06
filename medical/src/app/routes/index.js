import { Topic8 } from './topic8.route'; 
import { Topic16 } from './topic16.route';
import { Topic } from './topic.route';

export const Topic8Route = new Topic8().router;
export const Topic16Route = new Topic16().router;
export const TopicRoute = new Topic().router;
