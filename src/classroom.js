class Classroom {
    constructor(name) {
      this.name = name;
      this.students = {};
      this.assignments = []];
    }
  
    addStudent(student) {
      if (this.students[student.id]) {
        throw new Error(`Student ${student.id} is already enrolled in ${this.name}.`);
      }
      this.students[student.id] = student;
    }
  
    scheduleAssignment(assignmentDetails) {
      this.assignments.push(assignmentDetails);
    }
  
    submitAssignment(studentId, assignmentDetails) {
      if (!this.students[studentId]) {
        throw new Error(`Student ${studentId} is not enrolled in ${this.name}.`);
      }
      this.students[studentId].submitAssignment(assignmentDetails);
    }
  
    listStudents() {
      return Object.keys(this.students);
    }
  }
  
  module.exports = Classroom;
  