import { 
    validationResult 
} from 'express-validator'; 

import {
    http_badRequest
} from '../utils/messages/responses';


const handlingError = (req,res,next) => { 
    const error = validationResult(req);
    if (error.isEmpty()) next();
    else {
        const errorMessage = error.formatWith(({ msg, param }) => `${msg}`).array().join(',');
        res.status(400).json(http_badRequest(errorMessage));
    }
}
    
export const validator = (rules = []) => { 
    return [
        ...rules,
        handlingError
    ]
}