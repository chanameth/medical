import {
    topic8Schema
} from './topic8.schema';

import {
    Database
} from '../../configs/database.config';

const options = {
    freezeTableName: true
}

const topic8Model = Database.getSequelize().define("topic8", topic8Schema , options); 

export class Topic8 {
    static model(){
        return topic8Model;
    }

    static async findAll(where, options = {}){
        return topic8Model.findAll({  where , ...options });
    }

    static async findConditional(where, options = {}){
        const topic8  = await topic8Model.findOne(where , ...options);
        if(topic8 === null) return null;
        return topic8Model.findAll({where , ...options});
    }

    static async findByPk(id){
        return topic8Model.findByPk(id);
    }

    static async findOneAndUpdate(where, valueUpdate){
        const topic8  = await topic8Model.findOne(where ,  ...options);
        if(topic8 === null) return null;
        return topic8Model.update(valueUpdate,{limit:1});
    }

    static async updateByPk(id , valueUpdate){  
        return topic8Model.update(valueUpdate,{where:{id}});
    }

    static async updateOne(where, valueUpdate){
        return topic8Model.update(valueUpdate,{where,limit:1});
    }

    static async updateMany(where, valueUpdate){
        return topic8Model.update(valueUpdate,{where});
    }

    static async deleteOne(where){
        return topic8Model.destroy({where,limit:1});
    }

    static async deleteMany(where){
        return topic8Model.destroy({where});
    }

    static async create(params){
        return topic8Model.create(params);
    }

    static async bulkCreate(docs){
        return topic8Model.bulkCreate(docs);
    }
}