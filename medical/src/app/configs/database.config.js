import Sequelize from "sequelize";

import { 
  ENV
} from '../utils/constants';

const { 
  DB_CONFIG 
} = ENV; 
 
const sequelize = new Sequelize(DB_CONFIG.DB, DB_CONFIG.USER, DB_CONFIG.PASSWORD, DB_CONFIG.OPTIONS);


export class Database {
     static getSequelize(){
        return sequelize;
     }

     static async connect(){
        await sequelize.authenticate();
     }
}