module.exports = (sequelize, DataTypes) => {
  return sequelize.define('post', {
    id: {
      type: DataTypes.STRING,
    },
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