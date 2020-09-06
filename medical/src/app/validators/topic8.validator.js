import { 
    checkSchema 
} from 'express-validator';

import {
    validator
} from '../configs/validator.config';

import {
    monthTH2Number
} from '../utils/functions/moment.function';

import moment from 'moment';

const importTopic8Schema = checkSchema({
    /*year:{
        in:['query'],
        errorMessage : 'year is invalid.',
        isString: true
    },
    month:{
        in:['query'],
        errorMessage : 'month is invalid.',
        isString: true
    },*/
    customDate: {
        errorMessage: 'Date is invalid.',
        custom: {
            options: (value, { req, location, path }) => {
              const { year, month } = req.query;
              console.log(year, month,`${year}-${monthTH2Number(month)}`)
              if(!year) return false;
              if(!monthTH2Number(month)) return false;
              return moment(`${year}-${monthTH2Number(month)}`,'YYYY-MM').isValid();
            }
        }
    },
    department_name:{
        in:['query'],
        errorMessage : 'department_name is invalid.',
        isString: true
    }
});


export const validateImportTopic8 = [validator(importTopic8Schema)];