module.exports = (sequelize, DataTypes) => {
  const OngoingDetails = sequelize.define("OngoingDetails", {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    blocks: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    floors: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    flats: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    locations: {
      type: DataTypes.JSON,
      allowNull: true,
      get: function () {
        return JSON.parse(this.getDataValue("locations"));
      },
      set: function (val) {
        return this.setDataValue("locations", JSON.stringify(val));
      },
    },
    feature1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    feature2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    feature3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    feature4: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    feature5: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    feature6: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return OngoingDetails;
};
