<<<<<<< HEAD
const User = (sequelize, Sequelize) => {
  return sequelize.define({
    id: {
      type: STRING,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: STRING,
      allowNull:false,     
    }
  }, {
    timestamps: true,
    paranoid: false,
  });
};

export default User;

=======
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true, 
      unique: true,
      allowNull: false,
    },
    pw: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: true,
  });
};

>>>>>>> 815f65d58c5236f86039249eec753c0aad5aecc9
