const skillsDatabase = [
  "Python",
  "JavaScript",
  "C++",
  "C",
  "SQL",
  "MongoDB",
  "MySQL",
  "Node.js",
  "React",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Machine Learning",
  "Data Analysis",
  "EDA",
  "Matplotlib",
  "REST APIs",
  "DBMS",
  "OOPs",
  "Operating Systems"
];

const extractSkills = (text) => {
  const foundSkills = [];

  skillsDatabase.forEach((skill) => {
    if (text.toLowerCase().includes(skill.toLowerCase())) {
      foundSkills.push(skill);
    }
  });

  return [...new Set(foundSkills)];
};

module.exports = extractSkills;