module.exports = (sequelize, DataTypes) => {
  const ongoingFlatDetails = sequelize.define("ongoingFlatDetails", {
    ongoingFlatDetails_Id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    profile_name: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    profile_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profile_social_link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    flat_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    floor_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    flat_video: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    files: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  });

  return ongoingFlatDetails;
};
