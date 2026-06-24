const fs = require("fs");
const pdfParse = require("pdf-parse");

const parseResume = async (req, res) => {
  try {
    console.log("FILE =", req.file);

    if (!req.file) {
      return res.status(400).json({
        message: "No file received",
      });
    }

    const pdfBuffer = fs.readFileSync(req.file.path);

    const data = await pdfParse(pdfBuffer);

    res.status(200).json({
      message: "Resume Parsed Successfully",
      text: data.text,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { parseResume };