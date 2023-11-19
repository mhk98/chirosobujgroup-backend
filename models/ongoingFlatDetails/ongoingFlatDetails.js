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
      allowNull: false,
    },
    profile_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profile_social_link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flat_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flat_video: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    files: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  });

  return ongoingFlatDetails;
};
