const careerInsights = require("./careerInsights");

const careerDatabase = {
  // =========================
  // DATA SCIENCE & AI
  // =========================
  "Data Analyst": [
    "Python",
    "SQL",
    "Excel",
    "Power BI",
    "Tableau",
    "Data Analysis",
  ],

  "Data Scientist": [
    "Python",
    "SQL",
    "Machine Learning",
    "Statistics",
    "Data Analysis",
  ],

  "Machine Learning Engineer": [
    "Python",
    "Machine Learning",
    "TensorFlow",
    "Deep Learning",
  ],

  "AI Engineer": [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "NLP",
  ],

  // WEB DEVELOPMENT
  "Frontend Developer": [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
  ],

  "Backend Developer": [
    "Node.js",
    "MongoDB",
    "Express",
    "REST APIs",
    "JavaScript",
  ],

  "Full Stack Developer": [
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "HTML",
    "CSS",
  ],

  // CYBER SECURITY
  "Cyber Security Analyst": [
    "Network Security",
    "Linux",
    "Python",
    "Cyber Security",
    "Ethical Hacking",
  ],

  "Ethical Hacker": [
    "Linux",
    "Python",
    "Penetration Testing",
    "Cyber Security",
    "Networking",
  ],

  "SOC Analyst": [
    "SIEM",
    "Cyber Security",
    "Networking",
    "Linux",
    "Incident Response",
  ],

  // CLOUD
  "Cloud Engineer": [
    "AWS",
    "Azure",
    "Docker",
    "Linux",
    "Cloud Computing",
  ],

  "DevOps Engineer": [
    "Docker",
    "Kubernetes",
    "Linux",
    "CI/CD",
    "AWS",
  ],

  // BIG DATA
  "Big Data Engineer": [
    "Hadoop",
    "Spark",
    "Python",
    "SQL",
    "Big Data",
  ],

  "Data Engineer": [
    "SQL",
    "Python",
    "ETL",
    "Data Warehousing",
    "Spark",
  ],

  // IOT
  "IoT Engineer": [
    "Embedded Systems",
    "Arduino",
    "IoT",
    "C++",
    "Sensors",
  ],

  "Embedded Systems Engineer": [
    "C",
    "C++",
    "Microcontrollers",
    "Embedded Systems",
    "Arduino",
  ],

  // SOFTWARE
  "Software Engineer": [
    "Java",
    "Python",
    "C++",
    "OOPs",
    "DSA",
  ],

  "Java Developer": [
    "Java",
    "Spring Boot",
    "SQL",
    "OOPs",
  ],

  "Python Developer": [
    "Python",
    "Flask",
    "Django",
    "SQL",
  ],

  // MOBILE
  "Android Developer": [
    "Java",
    "Kotlin",
    "Android",
    "Firebase",
  ],

  "Flutter Developer": [
    "Flutter",
    "Dart",
    "Firebase",
    "Mobile Development",
  ],

  // DATABASE
  "Database Administrator": [
    "SQL",
    "MySQL",
    "Oracle",
    "Database Management",
  ],

  // NETWORKING
  "Network Engineer": [
    "Networking",
    "Linux",
    "Cisco",
    "Network Security",
  ],

  // QA
  "QA Engineer": [
    "Manual Testing",
    "Automation Testing",
    "Selenium",
    "Java",
  ],

  // BUSINESS
  "Business Analyst": [
    "SQL",
    "Excel",
    "Power BI",
    "Data Analysis",
  ],

  "Product Analyst": [
    "SQL",
    "Python",
    "Excel",
    "Data Analysis",
  ],
};

const matchCareers = (userSkills) => {
  const results = [];

  for (const career in careerDatabase) {
    const requiredSkills = careerDatabase[career];

    const matched = requiredSkills.filter((skill) =>
      userSkills.includes(skill)
    );

    const missingSkills = requiredSkills.filter(
      (skill) => !userSkills.includes(skill)
    );

    const score = Math.round(
      (matched.length / requiredSkills.length) * 100
    );

    results.push({
      career,
      matchPercentage: score,
      matchedSkills: matched,
      missingSkills,
      salaryRange:
        careerInsights[career]?.salaryRange || "Not Available",
      futureDemand:
        careerInsights[career]?.futureDemand || "Unknown",
    });
  }

  return results
    .sort((a, b) => b.matchPercentage - a.matchPercentage)
    .slice(0, 5);
};

module.exports = matchCareers;