import { Router } from './router';

import {
    importTopic8
} from '../controllers/topic8';

import {
    validateImportTopic8
} from '../validators/topic8.validator';

export class Topic8 extends Router{
    constructor(){
        super();
        this.router.post("/topic8/importExcel",[ validateImportTopic8, importTopic8 ]);
    }
}