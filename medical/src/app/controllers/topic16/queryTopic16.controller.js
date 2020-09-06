import { 
    Topic16Lab 
}  from '../../models/topic16Lab/topic16Lab.model';

import {
    Topic16Hospital
} from '../../models/topic16Hospital/topic16Hospital.model';

import {
    http_success,
    http_error
} from '../../utils/messages/responses/http.response';

import {
    extractLimitOffset
}  from '../../utils/functions';

export const queryTopic16Lab = async (req,res,next) => {
    try{ 
        const { query } = req;
        const { where , options } = extractLimitOffset(query);
        const findAll = await Topic16Lab.findAll(where , options);
        res.json(http_success("Success",{data:findAll}));
    }catch(err){
        res.json(http_error(err.message));
    }
}

export const queryTopic16Hospital = async (req,res,next) => {
    try{ 
        const { query } = req;
        const { where , options } = extractLimitOffset(query);
        const findAll = await Topic16Hospital.findAll(where , options);
        res.json(http_success("Success",{data:findAll}));
    }catch(err){
        res.json(http_error(err.message));
    }
}


export const download = (req,res,next) => {
    res.attachment('file.txt');
    res.send(); 
}