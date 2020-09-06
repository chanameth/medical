import {
    db
} from '../../models';


import {
    http_success,
    http_notFound
} from '../../utils/messages/responses/http.response';



export const updateOneTopic = async (req,res,next) => {
    try{
        const { topicName } = req.params;
        const { where , dataUpdate } = req.body; 
        const model = db[topicName];
        const [ rowsUpdated ] = await model.updateOne(where,dataUpdate);
        const respBody =  rowsUpdated === 0  
                                ? http_notFound("Not found") 
                                : http_success("Update Success");
        res.json(respBody);
    }catch(err){
        next(err);
    }
}

export const updateManyTopic = async (req,res,next) => {
    try{
        const { topicName } = req.params;
        const { where , dataUpdate } = req.body; 
        const model = db[topicName];
        const [ rowsUpdated ] = await model.updateMany(where,dataUpdate);
        const respBody =  rowsUpdated === 0 
                                ? http_notFound("Not found") 
                                : http_success("Update Success" , {data : { rowsUpdated }});
        res.json(respBody);
    }catch(err){
        next(err);
    }
}
