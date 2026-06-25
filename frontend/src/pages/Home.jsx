import Navbar from "../components/Navbar";
import UploadForm from "../components/UploadForm";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="hero">
        <h1>AI Resume Analyzer</h1>

        <p>
          Upload your resume, compare it against a
          job description and get ATS insights.
        </p>

        <UploadForm />
      </div>
    </>
  );
};

export default Home;