module.exports = (sequelize, DataTypes) => {
  const ongoingDetails = sequelize.define("ongoingDetails", {
    OngoingDetails_Id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    files: {
      type: DataTypes.JSON, // Using JSON type to store an array of file paths
      allowNull: false,
    },
  });

  return ongoingDetails;
};
