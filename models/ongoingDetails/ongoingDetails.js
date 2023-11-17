module.exports = (sequelize, DataTypes, Sequelize) => {
  const ongoingDetails = sequelize.define("ongoingDetails", {
    OngoingDetails_Id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    Image: {
      type: DataTypes.JSON,
      allowNull: false,
    },

    Video: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Member: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return ongoingDetails;
};
