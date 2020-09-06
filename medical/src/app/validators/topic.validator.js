import { 
    checkSchema, check 
} from 'express-validator';

import {
    validator
} from '../configs/validator.config';

import { 
    db 
}  from '../models';

import {
    isObject
} from '../utils/functions';

const topicNameSchema = checkSchema({
    topicName:{
        in:['params'],
        errorMessage : 'topicName is invalid.',
        custom: {
            options: (value, { req }) => value in db
        }
    }
});

const createSchema = checkSchema({
    dataCreate : {
        in : ['body'],
        errorMessage : 'dataCreate is invalid.',
        custom : {
            options: (value, { req }) => isObject(value)
        }
    }
});

const deleteSchema = checkSchema({
    where : {
        in : ['body'],
        errorMessage : 'where is invalid.',
        custom : {
            options: (value, { req }) => isObject(value) && Object.keys(value).length > 0
        }
    }
});

const updateSchema = checkSchema({
    dataUpdate:{
        in : ['body'],
        errorMessage : 'dataUpdate is invalid.',
        custom : {
            options: (value, { req }) => isObject(value)
        }
    },
    where : {
        in : ['body'],
        errorMessage : 'where is invalid.',
        custom : {
            options: (value, { req }) => isObject(value) && Object.keys(value).length > 0
        }
    }
});


export const validateTopicName = [validator(topicNameSchema)];

export const validateCreateTopic = [validator(createSchema)]; 

export const validateDeleteTopic = [validator(deleteSchema)];

export const validateUpdateTopic = [validator(updateSchema)];