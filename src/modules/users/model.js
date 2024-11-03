const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');  // 确保这个路径正确

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  // ... 其他字段
});

module.exports = User; 