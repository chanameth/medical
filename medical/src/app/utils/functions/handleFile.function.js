import fs from 'fs';
import _xlsx from 'xlsx';
import csvParser from 'csv-parser'

export const existsSync = pathFile => {
    return new Promise((resolve,reject)=>{
        fs.access(pathFile,fs.constants.F_OK,err =>  resolve(!err));
    });  
}

export const mkdirSync = (pathFile, options = {}) => {
    return new Promise((resolve,reject)=>{
        fs.mkdir(pathFile, options, (err) => {
            if (err) reject(err);
            else resolve("Create Success");
        });
    });  
}


export const parseExcel2Obj = pathFile => {
    const workbook = _xlsx.readFile(pathFile);
    const workSheet = workbook.Sheets[workbook.SheetNames[0]];
    return _xlsx.utils.sheet_to_json(workSheet);
} 

export const parseCSV2Obj = pathFile => {
    return new Promise((resolve,reject)=>{
        const results = []
        fs.createReadStream(pathFile)
            .pipe(csvParser())
            .on('data', (data) => {
                results.push(data)
            })
            .on('error',(err) => {
                console.error('Error on parse csv',err.message)
                reject(err);
            })
            .on('end',  () => { 
                resolve(results)
            });
    })
}