const matchJobDescription = (resumeSkills, jobDescription) => {
  const jd = jobDescription.toLowerCase();

  const requiredSkills = [
    "Python",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "SQL",
    "Git",
    "HTML",
    "CSS",
    "Machine Learning",
    "Data Analysis"
  ];

  const jdSkills = requiredSkills.filter((skill) =>
    jd.includes(skill.toLowerCase())
  );

  const matchedSkills = jdSkills.filter((skill) =>
    resumeSkills.includes(skill)
  );

  const missingSkills = jdSkills.filter(
    (skill) => !resumeSkills.includes(skill)
  );

  const matchPercentage =
    jdSkills.length === 0
      ? 0
      : Math.round((matchedSkills.length / jdSkills.length) * 100);

  return {
    jdSkills,
    matchedSkills,
    missingSkills,
    matchPercentage,
  };
};

module.exports = matchJobDescription;