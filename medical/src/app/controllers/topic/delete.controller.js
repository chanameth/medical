import {
    db
} from '../../models';


import {
    http_success,
    http_notFound
} from '../../utils/messages/responses/http.response';



export const deleteOneTopic = async (req,res,next) => {
    try{
        const { topicName } = req.params;
        const { where } = req.body; 
        const model = db[topicName];
        const count = await model.deleteOne(where);
        const respBody =  count === 0 
                                ? http_notFound("Not found") 
                                : http_success("Delete Success");
        res.json(respBody);
    }catch(err){
        next(err);
    }
}

export const deleteManyTopic = async (req,res,next) => {
    try{
        const { topicName } = req.params;
        const { where } = req.body; 
        const model = db[topicName];
        const rowsDeleted = await model.deleteMany(where);
        const respBody =  rowsDeleted === 0 
                                ? http_notFound("Not found") 
                                : http_success("Delete Success" , { data : { rowsDeleted }});
        res.json(respBody);
    }catch(err){
        next(err);
    }
}