import {
    topic16LabSchema
} from './topic16Lab.schema';

import {
    Database
} from '../../configs/database.config';

const options = {
    freezeTableName: true,
    //timestamps: false
}

const topic16LabModel = Database.getSequelize().define("topic16_lab", topic16LabSchema , options); 

export class Topic16Lab {
    static model(){
        return topic16LabModel;
    }

    static async findAll(where, options = {}){
        return topic16LabModel.findAll({  where , ...options });
    }

    static async findByPk(id){
        return topic16LabModel.findByPk(id);
    }

    static async findOneAndUpdate(where, valueUpdate){
        const topic16  = await topic16LabModel.findOne(where);
        if(topic16 === null) return null;
        return topic16.update(valueUpdate,{limit:1});
    }

    static async updateByPk(id , valueUpdate){  
        return topic16LabModel.update(valueUpdate,{where:{id}});
    }

    static async updateOne(where, valueUpdate){
        return topic16LabModel.update(valueUpdate,{where,limit:1});
    }

    static async updateMany(where, valueUpdate){
        return topic16LabModel.update(valueUpdate,{where});
    }

    static async deleteOne(where){
        return topic16LabModel.destroy({where,limit:1});
    }

    static async deleteMany(where){
        return topic16LabModel.destroy({where});
    }

    static async create(params){
        return topic16LabModel.create(params);
    }

}