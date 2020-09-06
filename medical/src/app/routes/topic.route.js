import { Router } from './router';

import {
    queryManyTopic,
    queryOneTopic,
    createTopic,
    updateOneTopic,
    deleteOneTopic,
    bulkCreateTopic,
    updateManyTopic,
    deleteManyTopic,
    downloadTopic
} from '../controllers/topic';

import {
    validateTopicName,
    validateCreateTopic,
    validateUpdateTopic,
    validateDeleteTopic
} from '../validators/topic.validator';

export class Topic extends Router{
    constructor(){
        super();
        this.router.use("/topic/:topicName" , [ validateTopicName  ]);
        this.router.get("/topic/:topicName/queryMany",[ queryManyTopic ]);
        this.router.post("/topic/:topicName/queryOne",[ queryOneTopic ]);
        this.router.get("/topic/:topicName/download",[downloadTopic]);
        this.router.post("/topic/:topicName/create",[ validateCreateTopic , createTopic ]);
        this.router.post("/topic/:topicName/bulkCreate",[ bulkCreateTopic ]);
        this.router.post("/topic/:topicName/updateOne",[ validateUpdateTopic , updateOneTopic ]);
        this.router.post("/topic/:topicName/updateMany",[ validateUpdateTopic , updateManyTopic ]);
        this.router.post("/topic/:topicName/deleteOne",[ validateDeleteTopic , deleteOneTopic ]);
        this.router.post("/topic/:topicName/deleteMany",[ validateDeleteTopic , deleteManyTopic ]);
    }
}