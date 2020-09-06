import multer from 'multer';
import path from 'path';
import moment from 'moment';


import {
    Topic8
} from '../../models/topic8/topic8.model';

import {
    existsSync,
    mkdirSync,
    parseExcel2Obj,
    parseCSV2Obj,
    monthTH2Number,
} from '../../utils/functions';

import {
    http_success,
    http_error
} from '../../utils/messages/responses';

import {
    mapPathImport
} from '../../utils/constants/path.constant';

const storage = multer.diskStorage({
    destination:async function(req, file, cb) {
      const pathDestination = mapPathImport['topic8'];
      if(! (await existsSync(pathDestination)) ){
         await mkdirSync(pathDestination, { recursive: true });
      }
      cb(null, pathDestination );
    },
    filename: function(req, file, cb) {  
      cb(null, Date.now().toString().concat(file.originalname));
    }
});


const upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb) {
      const { originalname } = file;
      const isAccepted = ['.xlsx','.xls','.csv'].includes(path.extname(originalname));
      if(isAccepted) return cb(null,true);
      else return cb(new Error('File type is wrong!!.'));
     }
}).array("files");


const readFileImport = async pathFile => {
    if(path.extname(pathFile) === '.csv'){
        return parseCSV2Obj(pathFile)
    }else{
        return await parseExcel2Obj(pathFile);
    }
}

const getDocs = async (pathFile, {year,month,department_name,uuid}) => {
    const  purchase_time = moment(`${year}-${monthTH2Number(month)}`,'YYYY-MM')
                            .subtract(543,'y');
    const defaultDoc = { year, month, department_name,uuid, purchase_time };
    const checkNumbers = ['source_budget', 'standard_price', 'proposed_price', 'final_price'];
    const docs = await readFileImport(pathFile);
    return docs.map(doc => {
                const mapDoc = {
                    source : doc['งานจัดซื้อหรือจัดจ้าง'],
                    source_budget : doc['วงเงินที่จะซื้อหรือจ้าง'],
                    standard_price : doc['ราคากลาง'],
                    source_method : doc['วิธีซื้อหรือจ้าง'],
                    name_proposal: doc['รายชื่อผู้เสนอราคา'] ,
                    proposed_price: doc['ราคาที่เสนอ'] ,
                    selection: doc['ผู้ได้รับการคัดเลือก'] ,
                    final_price: doc['ราคาที่ตกลงซื้อหรือจ้าง'] ,
                    reason: doc['เหตุผลที่คัดเลือกโดยสรุป'] ,
                    no_date_contract: doc['เลขที่และวันที่ของสัญญาหรือข้อตกลงในการซื้อหรือจ้าง'] ,
                    budget_code: doc['รหัสงบประมาณ'] ,
                    resource_code: doc['รหัสแหล่งเงิน'] ,
                    project_no: doc['เลขที่โครงการ'] ,
                    contract_no: doc['เลขคุมสัญญา']
                }
                for(const field of checkNumbers){
                    if(typeof mapDoc[field] === 'string'){
                        mapDoc[field] = mapDoc[field].replace(/,|\$/g,'');    
                    }
                    if(isNaN(parseFloat(mapDoc[field])))
                        delete mapDoc[field];
                    else
                        mapDoc[field] = parseFloat(mapDoc[field]);
                }
                return {...defaultDoc, ...mapDoc};
            });
}

const handleImportExcel = async (req,res,next) => {
    const { path : pathFile } = req.files[0]; 
    const docs = await getDocs(pathFile,req.query);
    const size = 500;
    const round = Math.ceil(docs.length/size);
    for(let i = 0; i < round; i++){
        const start = i * size;
        const end = start + size;
        await Topic8.bulkCreate(docs.slice(start,end));
    }
    res.json(http_success(`Import ${docs.length} Success.`));
}


export const importTopic8 = async (req,res,next) => {
    upload(req, res,async function(err) {
        if (err instanceof multer.MulterError) {
            console.info(err)
          return res.status(200).json(http_error('error'));
        } else if (err) {
          return res.status(200).json(http_error(err.message));
        }
        const [ fileImport ] = req.files;
        if(fileImport === undefined) return res.status(200).json(http_error('fileImport undefined.'));
        if(!(await existsSync(fileImport.path))) return res.status(200).json(http_error(`${fileImport.path} doesn't exist.`));
        return handleImportExcel(req,res,next);
    });
}