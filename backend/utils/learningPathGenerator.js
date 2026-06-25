const learningPaths = {
  "Data Analyst": [
    "Excel",
    "SQL",
    "Statistics",
    "Power BI",
    "Tableau",
  ],

  "Data Scientist": [
    "Python",
    "Statistics",
    "Machine Learning",
    "Deep Learning",
    "MLOps",
  ],

  "Machine Learning Engineer": [
    "Python",
    "Machine Learning",
    "TensorFlow",
    "Deep Learning",
    "Deployment",
  ],

  "Frontend Developer": [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
  ],

  "Backend Developer": [
    "Node.js",
    "Express",
    "MongoDB",
    "Authentication",
    "System Design",
  ],

  "Full Stack Developer": [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
  ],

  "Cyber Security Analyst": [
    "Networking",
    "Linux",
    "Security Fundamentals",
    "Ethical Hacking",
    "SIEM Tools",
  ],

  "Cloud Engineer": [
    "Linux",
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
  ],

  "DevOps Engineer": [
    "Linux",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Cloud Platforms",
  ],

  "IoT Engineer": [
    "C++",
    "Microcontrollers",
    "Sensors",
    "Networking",
    "Cloud IoT",
  ],
};

const generateLearningPath = (career) => {
  return learningPaths[career] || [];
};

module.exports = generateLearningPath;