import {
    topic8ReferenceSchema
} from './topic8Reference.schema';

import {
    Database
} from '../../configs/database.config';

const options = {
    freezeTableName: true
}

const topic8ReferenceModel = Database.getSequelize().define("topic8Reference", topic8ReferenceSchema , options); 

export class Topic8Reference {
    static model(){
        return topic8ReferenceModel;
    }

    static async findAll(where, options = {}){
        return topic8ReferenceModel.findAll({  where , ...options });
    }

     static async findConditional(where, options = {}){
        const topic8reference  = await topic8ReferenceModel.findOne(where , ...options);
        if(topic8reference === null) return null;
        return topic8ReferenceModel.findAll({where , ...options});
    }
 
    /* static async findByPk(id){
        return topic8Model.findByPk(id);
    } */

    static async findOneAndUpdate(where, valueUpdate){
        const topic8  = await topic8ReferenceModel.findOne(where ,  ...options);
        if(topic8 === null) return null;
        return topic8ReferenceModel.update(valueUpdate,{limit:1});
    }

    static async updateByPk(id , valueUpdate){  
        return topic8ReferenceModel.update(valueUpdate,{where:{id}});
    }

    static async updateOne(where, valueUpdate){
        return topic8ReferenceModel.update(valueUpdate,{where,limit:1});
    }

    static async updateMany(where, valueUpdate){
        return topic8ReferenceModel.update(valueUpdate,{where});
    }

    static async deleteOne(where){
        return topic8ReferenceModel.destroy({where,limit:1});
    }

    static async deleteMany(where){
        return topic8ReferenceModel.destroy({where});
    }

    static async create(params){
        return topic8ReferenceModel.create(params);
    }

    static async bulkCreate(docs){
        return topic8ReferenceModel.bulkCreate(docs);
    }
}