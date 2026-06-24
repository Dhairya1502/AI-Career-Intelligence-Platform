const calculateATSScore = (skills) => {
  let score = 0;

  score += Math.min(skills.length * 4, 60);

  const importantSkills = [
    "Python",
    "SQL",
    "JavaScript",
    "Git",
    "Machine Learning",
    "Node.js",
    "MongoDB"
  ];

  importantSkills.forEach((skill) => {
    if (skills.includes(skill)) {
      score += 5;
    }
  });

  return Math.min(score, 100);
};

module.exports = calculateATSScore;