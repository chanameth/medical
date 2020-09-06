
export const mapConvert2Number = (arrs = []) => {
    return arrs.map(v => {
        const valInt = parseInt(v);
        return Number.isInteger(valInt) ? valInt : undefined; 
    });
};

export const extractLimitOffset = ( params ) => {
    const where = Object.assign({},params);
    const options = ["_limit","_offset"].reduce((acc,cur)=>{
                        const valInt = parseInt(params[cur]);
                        if(Number.isInteger(valInt)){
                            acc[cur.substr(1)] = valInt;
                            delete where[cur];
                        }
                        return acc;
                    },{});
    return { where , options };
}
 
export const assignObject = (_object, excludes = []) => {
    return excludes.reduce((acc,cur) => {
        delete acc[cur];
        return acc;
    }, Object.assign({}, _object))
}


export const isFunction = (val) => typeof val === 'function';

export const isNumber = (val) => typeof val === 'number';

export const isString = (val) => typeof val === 'string';

export const isBoolean = (val) => typeof val === 'boolean';