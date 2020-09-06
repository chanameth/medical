import {
    db
} from '../../models';

import {
    extractLimitOffset
} from '../../utils/functions';

import {
    http_success
} from '../../utils/messages/responses/http.response';

export const queryManyTopic = async (req,res,next) => {
    try{
        const { topicName } = req.params;
        const model = db[topicName];
        const { query } = req;
        const { where , options } = extractLimitOffset(query);
        const findAll = await model.findAll(where,options);
        res.json(http_success("Success",{data:findAll}));
    }catch(err){
        next(err);
    }
}

export const queryOneTopic = async (req,res,next) =>{
    try{
        const { topicName } = req.params;
        const model = db[topicName];
        const {where , options } = extractLimitOffset(req);
        const findConditional = await model.findConditional(where.body.where,options);
        res.json(http_success("Success",{data:findConditional}));
    }catch(err){
        next(err);
    }
}