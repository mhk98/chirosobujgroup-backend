const db = require("../../models");
const Ongoing = db.ongoing;
// const OngoingDetails = db.ongoingDetails;
// const OngoingFlatDetails = db.ongoingFlatDetails;

exports.createOngoing = async (req, res, next) => {
  try {
    const { Title, Flat, Floor, Area, Address } = req.body;

    // if (!req.file) {
    //   return res.status(400).json({
    //     status: "fail",
    //     message: "No file provided for upload",
    //   });
    // }

    const data = {
      Title: Title,
      Flat: Flat,
      Floor: Floor,
      Area: Area,
      Address: Address,
      Image: req.file.path,
    };

    const result = await Ongoing.create(data);

    // const insertOngoingDetails = await OngoingDetails.create({
    //   OngoingOngoingId: result.Ongoing_Id,
    // });
    // const insertOngoingFlatDetails = await OngoingFlatDetails.create({
    //   OngoingOngoingId: result.Ongoing_Id,
    // });

    res.status(200).send({
      status: "Success",
      message: "Successfully created Ongoing",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.getAllOngoing = async (req, res) => {
  try {
    const result = await Ongoing.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all result",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
// exports.singleReport = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const report = await Report.findOne({
//       where: { Id: id },
//     });

//     if (!report) {
//       return res.status(401).send({
//         status: "fail",
//         message: "No report found",
//       });
//     }
//     res.status(200).send({
//       status: "Success",
//       message: "Successfully got your report",
//       data: report,
//     });
//   } catch (error) {
//     ErrorLogger.error(req.originalUrl + " " + error.message);
//     res.status(500).json({
//       status: "fail",
//       message: "Something went wrong",
//       error: error.message,
//     });
//   }
// };
exports.deleteOngoing = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Ongoing.destroy({
      where: { Id: id },
    });

    if (!report) {
      return res.status(401).send({
        status: "fail",
        message: "No Ongoing found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your Ongoing",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.updateOngoing = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await Ongoing.update(data, {
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No result found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your Ongoing",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
