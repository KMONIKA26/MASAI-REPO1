function addNewDept(school, newDepartment) {
    const updatedDepartments = { ...school.departments, ...newDepartment };
    const updatedSchool = { ...school, departments: updatedDepartments };
    return updatedSchool;
  }
  
  const newDepartment = {
    art: { teachers: 2, students: 50 }
  };
  
  console.log(addNewDept(school, newDepartment));
  