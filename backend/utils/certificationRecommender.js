const certificationDatabase = {
  "Data Analyst": [
    "Google Data Analytics Professional Certificate",
    "IBM Data Analyst Professional Certificate",
    "Microsoft Power BI Data Analyst",
  ],

  "Data Scientist": [
    "IBM Data Science Professional Certificate",
    "Google Advanced Data Analytics",
    "AWS Machine Learning Specialty",
  ],

  "Machine Learning Engineer": [
    "AWS Machine Learning Specialty",
    "TensorFlow Developer Certificate",
    "Google Professional ML Engineer",
  ],

  "Frontend Developer": [
    "Meta Front-End Developer",
    "JavaScript Algorithms and Data Structures",
    "React Developer Certification",
  ],

  "Backend Developer": [
    "Node.js Developer Certification",
    "MongoDB Associate Developer",
    "REST API Design Certification",
  ],

  "Full Stack Developer": [
    "Meta Full Stack Developer",
    "MERN Stack Certification",
    "Full Stack Open",
  ],

  "Cyber Security Analyst": [
    "CompTIA Security+",
    "Certified Ethical Hacker (CEH)",
    "Google Cybersecurity Certificate",
  ],

  "Cloud Engineer": [
    "AWS Cloud Practitioner",
    "AWS Solutions Architect Associate",
    "Microsoft Azure Fundamentals",
  ],

  "DevOps Engineer": [
    "Docker Certified Associate",
    "Kubernetes CKA",
    "AWS DevOps Engineer",
  ],

  "IoT Engineer": [
    "Cisco IoT Certification",
    "Arduino Certification",
    "AWS IoT Foundations",
  ],
};

const recommendCertifications = (career) => {
  return certificationDatabase[career] || [];
};

module.exports = recommendCertifications;