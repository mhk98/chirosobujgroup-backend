module.exports = (sequelize, DataTypes) => {
  const Ongoing = sequelize.define("Ongoing", {
    Ongoing_Id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Title: {
      type: DataTypes.STRING(30), // Adjust the length as needed
      allowNull: false,
    },
    Image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Flat: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Floor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Area: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Ongoing;
};
