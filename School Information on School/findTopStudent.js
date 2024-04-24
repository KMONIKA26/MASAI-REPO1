function findTopStudent(school, courseName) {
    const topStudent = school.students.reduce((top, student) => {
      if (student.scores[courseName] > top.score) {
        return { name: student.name, className: student.className, scores: student.scores, score: student.scores[courseName] };
      }
      return top;
    }, { name: "", className: "", scores: {}, score: -Infinity });
  
    return topStudent;
  }
  
  console.log(findTopStudent(school, 'math'));
  