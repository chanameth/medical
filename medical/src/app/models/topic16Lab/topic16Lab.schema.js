import { Sequelize , DataTypes } from 'sequelize';

export const topic16LabSchema =  {
    //order_id:{
    //  type: DataTypes.INTEGER 
    //},
    code_id: {
      type: Sequelize.STRING
    },
    district_id: {
      type: Sequelize.STRING
    },
    hub_id: {
      type: Sequelize.STRING
    },
    laboratory_name: {
      type: Sequelize.STRING
    },
    province_name: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    },
    registration_number_new: {
      type: Sequelize.STRING
    },
    registration_number_old: {
      type: Sequelize.STRING
    },
    approved_date: {
      type: Sequelize.DATE
    },
    surveillance_due_date: {
      type: Sequelize.DATE,
      defaultValue: null
    },
    certification_deadline_date: {
      type: Sequelize.DATE
    },
    latitude: {
      type: DataTypes.DOUBLE
    },
    longitude: {
      type: DataTypes.DOUBLE
    }
  }
 