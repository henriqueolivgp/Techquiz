function calculateTotalPoints(inquiry) {
    // Initialize the total points variable
    let totalPoints = 0;
  
    // Loop through the questions in the inquiry
    for (const question of inquiry.questions) {
      // Add the points for the current question to the total points
      totalPoints += question.points;
    }

    const inquiry = {
        questions: [
          { points: 10 },
          { points: 5 },
          { points: 20 }
        ]
      };
      
      const TotalPoints = calculateTotalPoints(inquiry);
      
      console.log(totalPoints); // Output: 35
      
  
    // Return the total points
    return totalPoints;
  }
  