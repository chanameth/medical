import {
    topic16HospitalSchema
} from './topic16Hospital.schema';

import {
    Database
} from '../../configs/database.config';

const options = {
    freezeTableName: true
}

const topic16HospitalModel = Database.getSequelize().define("topic16_hospital", topic16HospitalSchema , options); 

export class Topic16Hospital {
    static model(){
        return topic16HospitalModel;
    }

    static async findAll(where, options = {}){
        return topic16HospitalModel.findAll({  where , ...options });
    }

    static async findByPk(id){
        return topic16HospitalModel.findByPk(id);
    }

    static async findOneAndUpdate(where, valueUpdate){
        const topic16  = await topic16HospitalModel.findOne(where);
        if(topic16 === null) return null;
        return topic16.update(valueUpdate,{limit:1});
    }

    static async updateByPk(id , valueUpdate){  
        return topic16HospitalModel.update(valueUpdate,{where:{id}});
    }

    static async updateOne(where, valueUpdate){
        return topic16HospitalModel.update(valueUpdate,{where,limit:1});
    }

    static async updateMany(where, valueUpdate){
        return topic16HospitalModel.update(valueUpdate,{where});
    }

    static async deleteOne(where){
        return topic16HospitalModel.destroy({where,limit:1});
    }

    static async deleteMany(where){
        return topic16HospitalModel.destroy({where});
    }

    static async create(params){
        return topic16HospitalModel.create(params);
    }

}