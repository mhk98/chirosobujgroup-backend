const db = require("../db/db");
const { DataTypes } = require("sequelize");

// Synchronize the database.
// The `force: false` option means that it will not drop and true option it will drop
db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Connection re-synced");
  })
  .catch((err) => {
    console.log("Error on re-synced", err);
  });

// Define models and associate them with the Sequelize instance
// 'db.user' and 'db.report' now represent Sequelize models
db.user = require("../models/users/user")(db.sequelize, DataTypes);
db.report = require("../models/report/report")(db.sequelize, DataTypes);
db.ongoing = require("./ongoing/ongoing")(db.sequelize, DataTypes);
db.ongoingDetails = require("./ongoingDetails/ongoingDetails")(
  db.sequelize,
  DataTypes
);

db.ongoing.hasMany(db.ongoingDetails, { foreignkey: "Ongoing_Id" });
db.ongoingDetails.belongsTo(db.ongoing, { foreignkey: "Ongoing_Id" });

module.exports = db;
