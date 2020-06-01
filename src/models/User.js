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

