module.exports = (sequelize, DataTypes, Sequelize) => {
  const ongoing = sequelize.define("ongoing", {
    Ongoing_Id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    Title: {
      type: DataTypes.STRING(30),
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

  return ongoing;
};
