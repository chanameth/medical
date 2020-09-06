export const isObject = (val) => {
    return val != null && !Array.isArray(val) && typeof val === 'object'; 
}