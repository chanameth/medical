import XLSX from 'xlsx';

import {
    mapNameHeaders
} from '../../utils/constants';

import {
    isFunction,
    extractLimitOffset,
    assignObject
} from '../../utils/functions';

import {
    db
} from '../../models';

import {
     http_badRequest
} from '../../utils/messages/responses/http.response';

const downloadExcel = async (req , res , next) => {
    const { topicName } = req.params;
    const { _typeExtension } = req.query;
    const model = db[topicName];
    try{
        const { where, options } = req.dataQuery;
        const docs = await model.findAll(where,options);
        const nameHeaders = mapNameHeaders[topicName];
        let contents = docs.map(({dataValues})=>{
            return nameHeaders.map(( {field  , defaultVal , format}) => isFunction(format) ? format(dataValues[field]) : dataValues[field] || defaultVal );
        });
        contents.unshift(nameHeaders.map(({name})=>name));
        const wb = XLSX.utils.book_new(),
        ws = XLSX.utils.aoa_to_sheet(contents);
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        const wbout = XLSX.write(wb, { bookType: _typeExtension, type: 'buffer'});
        res.attachment(`fileExport.${_typeExtension}`); 
        res.send(Buffer.from(wbout)) 
    }catch(err){
        next(err);
    }
    
}


export const downloadTopic = (req , res , next) => {
    const { _typeFile } = req.query;
    const _query = assignObject(req.query , ['_typeFile', '_typeExtension']);
    const { where , options } = extractLimitOffset(_query);
    req.dataQuery = { where, options};
    switch(_typeFile){
        case "excel" :
            req.query._typeExtension = req.query._typeExtension || 'xlsx';
            if(['csv','xlsx'].includes(req.query._typeExtension)){
                downloadExcel(req,res,next);
            }else{
                res.json(http_badRequest('Excel extension is invalid.'));
            }
         break;
        default :
            res.json(http_badRequest(`File type doesn't match.`));
         break;
    } 
}