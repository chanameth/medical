import {
    db
} from '../../models';


import {
    http_success
} from '../../utils/messages/responses/http.response';

export const createTopic = async (req,res,next) => {
    try{
        const { topicName } = req.params;
        const { dataCreate } = req.body;
        const model = db[topicName];
        await model.create(dataCreate);
        res.json(http_success("Create Success"));
    }catch(err){
        next(err);
    }
}


export const bulkCreateTopic = async (req,res,next) => {

}   