import { Router } from './router';
import {  queryTopic16Lab , queryTopic16Hospital , download } from '../controllers/topic16';

export class Topic16 extends Router{
    constructor(){
        super();
        this.router.get("/topic16/lab",queryTopic16Lab);
        this.router.get("/topic16/hospital",queryTopic16Hospital);
        this.router.get("/download",download);
    }
}