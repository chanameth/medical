const http_message = (statusCode,status,message,options = {}) =>{
    return {
        statusCode,
        status,
        message,
        ...options
    }
}

export const http_success = (message = "Success" , options) => http_message('20000',true,message,options);

export const http_badRequest = (message = "Bad Request",options) => http_message('40000',false,message,options);

export const http_unAuthenticated = (message = "Unauthenticated",options) => http_message('40100',false,message,options);

export const http_unAuthorized = (message = "Unauthorized",options) => http_message('40300',false,message,options);

export const http_notFound = (message = "Not found",options) => http_message('40400',false,message,options);

export const http_conflict = (message = "conflict",options) => http_message('40900',false,message,options);

export const http_error = (message = "System Error") => http_message('50000',false,message);


