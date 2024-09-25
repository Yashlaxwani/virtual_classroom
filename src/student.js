class Student {
    constructor(id) {
      this.id = id;
      this.assignments = {};
    }
  
    submitAssignment(assignmentDetails) {
      this.assignments[assignmentDetails] = 'Submitted';
    }
  }
  
  module.exports = Student;
  