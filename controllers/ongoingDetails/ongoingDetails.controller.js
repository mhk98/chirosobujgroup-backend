const db = require("../../models");
const OngoingDetails = db.ongoingDetails;

exports.createOngoingDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const { Video, Member } = req.body;
    const data = {
      Image: req.file.path,
      Video: Video,
      Member: Member,
      ongoingOngoingId: id,
    };
    const result = await OngoingDetails.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created OngoingDetails",
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

exports.getAllOngoingDetails = async (req, res) => {
  try {
    const result = await OngoingDetails.findAll();

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
exports.singleOngoingDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await OngoingDetails.findOne({
      where: { ongoingOngoingId: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No result found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your result",
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
exports.deleteOngoingDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await OngoingDetails.destroy({
      where: { Id: id },
    });

    if (!report) {
      return res.status(401).send({
        status: "fail",
        message: "No OngoingDetails found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your OngoingDetails",
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

exports.updateOngoingDetails = async (req, res) => {
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
      message: "Successfully update your OngoingDetails",
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
