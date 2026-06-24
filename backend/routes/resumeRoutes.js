const express = require("express");
const multer = require("multer");
const extractTextFromPDF = require("../utils/pdfParser");
const extractSkills = require("../utils/skillExtractor");
const calculateATSScore = require("../utils/atsScorer");
const matchJobDescription = require("../utils/jobMatcher");
const { parseResume } = require("../controllers/resumeController");

const router = express.Router();

// Multer Storage Config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

/* =========================
   TEST ROUTE (UPLOAD ONLY)
========================= */
router.post("/test-upload", upload.single("resume"), (req, res) => {
  console.log("=== TEST ROUTE HIT ===");
  console.log(req.file);

  return res.json({
    success: true,
    file: req.file || null,
    body: req.body || {},
  });
});

/* =========================
   REAL RESUME UPLOAD + PARSE
========================= */
router.post("/upload", upload.single("resume"), async (req, res) => {
  try {
    console.log("=== RESUME UPLOAD HIT ===");
    console.log(req.file);

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // Extract text from PDF
    const filePath = req.file.path;
    const extractedText = await extractTextFromPDF(filePath);

    // Extract skills from resume
    const skills = extractSkills(extractedText);

    // Calculate ATS Score
    const atsScore = calculateATSScore(skills);

    // Get Job Description from Postman form-data
    const jobDescription = req.body.jobDescription || "";

    // Match Resume Skills with JD
    const jobMatch = matchJobDescription(
      skills,
      jobDescription
    );

    return res.json({
      success: true,
      message: "Resume uploaded and analyzed successfully",

      atsScore,

      skills,

      jobMatch,

      file: {
        originalname: req.file.originalname,
        filename: req.file.filename,
        size: req.file.size,
      },

      extractedText: extractedText.slice(0, 1000),
    });
  } catch (error) {
    console.log("ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Error parsing resume",
      error: error.message,
    });
  }
});

/* =========================
   CONTROLLER ROUTE
========================= */
router.post(
  "/upload-controller",
  upload.single("resume"),
  parseResume
);

module.exports = router;