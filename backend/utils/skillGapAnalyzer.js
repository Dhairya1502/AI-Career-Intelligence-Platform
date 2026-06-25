const analyzeSkillGap = (careerMatch) => {
  const gapScore = 100 - careerMatch.matchPercentage;

  let readinessLevel = "";

  if (careerMatch.matchPercentage >= 80) {
    readinessLevel = "Job Ready";
  } else if (careerMatch.matchPercentage >= 60) {
    readinessLevel = "Intermediate";
  } else if (careerMatch.matchPercentage >= 40) {
    readinessLevel = "Beginner";
  } else {
    readinessLevel = "Needs Significant Upskilling";
  }

  return {
    career: careerMatch.career,

    matchPercentage: careerMatch.matchPercentage,

    skillGapScore: gapScore,

    readinessLevel,

    prioritySkills: careerMatch.missingSkills,

    recommendation:
      careerMatch.missingSkills.length > 0
        ? `Learning ${careerMatch.missingSkills.join(
            ", "
          )} can improve your eligibility for ${careerMatch.career} roles.`
        : `You already possess most of the required skills for ${careerMatch.career}.`,
  };
};

module.exports = analyzeSkillGap;