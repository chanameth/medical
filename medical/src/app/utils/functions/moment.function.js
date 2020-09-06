import {
    mapMonthTH
} from '../constants/date.constant';

export const isMomentValid = (_moment) => {
    return (_moment.isValid() === true) ? true : false;  
}

export const monthTH2Number = (monthTxt) => {
    return mapMonthTH[monthTxt];
}