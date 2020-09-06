import { DataTypes, Sequelize } from 'sequelize';

export const topic8Schema = {
  department_name: {
    type: Sequelize.STRING
  },
  year: {
    type: Sequelize.INTEGER
  },
  month: {
    type: Sequelize.STRING
  },
  source: {
    type: Sequelize.STRING
  },
  source_budget: {
    type: DataTypes.DOUBLE
  },
  standard_price: {
    type: DataTypes.DOUBLE
  },
  source_method: {
    type: Sequelize.STRING
  },
  name_proposal: {
    type: Sequelize.STRING
  },
  proposed_price: {
    type: DataTypes.DOUBLE
  },
  selection: {
    type: Sequelize.STRING
  },
  final_price: {
    type: DataTypes.DOUBLE
  },
  reason: {
    type: Sequelize.STRING
  },
  no_date_contract: {
    type: Sequelize.STRING
  },
  budget_code: {
    type: Sequelize.STRING
  },
  resource_code: {
    type: Sequelize.STRING
  },
  project_no: {
    type: Sequelize.STRING
  },
  contract_no: {
    type: Sequelize.STRING
  },
  purchase_time: {
    type: DataTypes.DATEONLY
  }
}
