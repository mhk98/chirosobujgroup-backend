const db = require("../../models");
const OngoingFlatDetails = db.ongoingFlatDetails;

exports.createOngoingFlatDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const { profile_name, profile_url, profile_social_link, flat_name, flat_video} =
      req.body;
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        status: "fail",
        message: "No files were uploaded",
      });
    }

    const filesArray = req.files.map((element) => ({
      filePath: element.path,
    }));

    console.log("object", filesArray);
    console.log("body", req.body);
    

    const result = await OngoingFlatDetails.create({
      ongoingFlatDetailsongoingFlatDetailsId: id,
      OngoingOngoingId: id,
      profile_name,
      profile_url,
      profile_social_link,
      flat_name,
      flat_video,
      files: filesArray,
    });

    res.status(200).send({
      status: "Success",
      message: "Successfully create OngoingFlatDetails",
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

exports.getAllongoingFlatDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await OngoingFlatDetails.findAll({
      where: { flat_name: id },
    });

    // console.log(result);

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

exports.deleteongoingFlatDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await OngoingFlatDetails.destroy({
      where: { Id: id },
    });

    if (!report) {
      return res.status(401).send({
        status: "fail",
        message: "No ongoingFlatDetails found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your ongoingFlatDetails",
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

exports.updateongoingFlatDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await OngoingFlatDetails.update(data, {
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
      message: "Successfully update your ongoingFlatDetails",
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
