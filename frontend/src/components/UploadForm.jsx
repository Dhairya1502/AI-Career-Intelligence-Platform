import { useState } from "react";
import API from "../services/api";

const UploadForm = () => {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume) {
      alert("Please upload a resume");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("resume", resume);
      formData.append("jobDescription", jobDescription);

      const response = await API.post(
        "/resume/upload",
        formData
      );

      setResult(response.data);
    } catch (error) {
  console.log("FULL ERROR:", error);

  if (error.response) {
    console.log("RESPONSE DATA:", error.response.data);
    console.log("STATUS:", error.response.status);
  }

  if (error.request) {
    console.log("REQUEST:", error.request);
  }

  alert(error.message);
} finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="upload-form" onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setResume(e.target.files[0])}
        />

        <textarea
          placeholder="Paste Job Description Here..."
          rows="8"
          value={jobDescription}
          onChange={(e) =>
            setJobDescription(e.target.value)
          }
        />

        <button type="submit">
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>
      </form>

      {result && (
        <div className="results">
          <div className="card">
            <h2>ATS Score</h2>
            <p>{result.atsScore}/100</p>
          </div>

          <div className="card">
            <h2>Match Percentage</h2>
            <p>
              {result.jobMatch?.matchPercentage || 0}%
            </p>
          </div>

          <div className="card">
            <h2>Matched Skills</h2>
            <ul>
              {result.jobMatch?.matchedSkills?.map(
                (skill, index) => (
                  <li key={index}>✅ {skill}</li>
                )
              )}
            </ul>
          </div>

          <div className="card">
            <h2>Missing Skills</h2>
            <ul>
              {result.jobMatch?.missingSkills?.map(
                (skill, index) => (
                  <li key={index}>❌ {skill}</li>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadForm;