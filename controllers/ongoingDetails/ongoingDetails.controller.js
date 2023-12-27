const db = require("../../models");
const OngoingDetails = db.ongoingDetails;
const Ongoing = db.ongoing;

exports.createOngoingDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("params", id);

    const {
      description,
      blocks,
      floors,
      flats,
      feature1,
      feature2,
      feature3,
      feature4,
      feature5,
      feature6,
      locations,
    } = req.body;

    const ongoingData = await Ongoing.findOne({
      where: {
        Ongoing_Id: id,
      },
    });

    console.log("ongoingData", ongoingData);
    const data = {
      OngoingOngoingId: ongoingData.Ongoing_Id,
      description,
      blocks,
      floors,
      flats,
      feature1,
      feature2,
      feature3,
      feature4,
      feature5,
      feature6,
      locations,
    };
    const result = await OngoingDetails.create(data);
    // .then((createdEntry) => {
    //   console.log("Entry created:", createdEntry);
    // });

    res.status(200).send({
      status: "Success",
      message: "Successfully create OngoingDetails",
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
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid or missing Ongoing ID",
      });
    }

    console.log("ongoingId", id);

    const data = await OngoingDetails.findAll({
      where: { OngoingOngoingId: id },
    });

    if (!data || data.length === 0) {
      return res.status(404).json({
        status: "Success",
        message: "No ongoing details found for the specified ID",
        data: [],
      });
    }

    res.status(200).send({
      status: "Success",
      message: "Successfully retrieved all ongoing details",
      data,
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
    const {
      blocks,
      floors,
      flats,
      feature1,
      feature2,
      feature3,
      feature4,
      feature5,
      feature6,
    } = req.body;

    const data = {
      blocks,
      floors,
      flats,
      feature1,
      feature2,
      feature3,
      feature4,
      feature5,
      feature6,
    };

    const result = await OngoingDetails.update(data, {
      where: { OngoingDetails_Id: id },
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
