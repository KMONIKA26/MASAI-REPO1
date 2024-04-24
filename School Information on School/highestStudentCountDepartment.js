function highestStudentCountDepartment(school) {
    let maxStudents = -Infinity;
    let maxDepartment = '';
  
    for (let department in school.departments) {
      if (school.departments[department].students > maxStudents) {
        maxStudents = school.departments[department].students;
        maxDepartment = department;
      }
    }
  
    return maxDepartment;
  }
  
  console.log(highestStudentCountDepartment(school));
  