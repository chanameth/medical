import { DataTypes, Sequelize } from 'sequelize';
export const topic8ReferenceSchema = {
  uuid: {
    type: Sequelize.UUID,
    default:Sequelize.UUID4
  },
  year: {
    type: Sequelize.INTEGER
  },
  month: {
    type: Sequelize.STRING
  },
  department: {
    type: Sequelize.STRING
  },
  purchase_time: {
    type: DataTypes.DATEONLY
  }
}
