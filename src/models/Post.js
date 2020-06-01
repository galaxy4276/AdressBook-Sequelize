module.exports = (sequelize, DataTypes) => {
  return sequelize.define('post', {
    title: {
      type: DataTypes.STRING,
      primaryKey: true, 
      unique: true,
    },
    content: {
      type: DataTypes.STRING,
    },
  }, {
    timestamps: true,
  });
};