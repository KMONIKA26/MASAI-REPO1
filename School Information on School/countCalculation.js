function countCalculation(school) {
    const {
      departments: {
        math: { teachers: mathTeachersCount, students: mathStudentsCount },
        history: { teachers: historyTeachersCount, students: historyStudentsCount },
      },
    } = school;
  
    return { mathTeachersCount, historyTeachersCount, mathStudentsCount, historyStudentsCount };
  }
  
  console.log(countCalculation(school));
  