const Classroom = require('./classroom');
const Student = require('./student');

class VirtualClassroomManager {
  constructor() {
    this.classrooms = {};
  }

  addClassroom(className) {
    if (this.classrooms[className]) {
      throw new Error(`Classroom ${className} already exists.`);
    }
    this.classrooms[className] = new Classroom(className);
  }

  addStudent(studentId, className) {
    if (!this.classrooms[className]) {
      throw new Error(`Classroom ${className} does not exist.`);
    }
    const student = new Student(studentId);
    this.classrooms[className].addStudent(student);
  }

  scheduleAssignment(className, assignmentDetails) {
    if (!this.classrooms[className]) {
      throw new Error(`Classroom ${className} does not exist.`);
    }
    this.classrooms[className].scheduleAssignment(assignmentDetails);
  }

  submitAssignment(studentId, className, assignmentDetails) {
    if (!this.classrooms[className]) {
      throw new Error(`Classroom ${className} does not exist.`);
    }
    this.classrooms[className].submitAssignment(studentId, assignmentDetails);
  }

  listStudents(className) {
    if (!this.classrooms[className]) {
      throw new Error(`Classroom ${className} does not exist.`);
    }
    return this.classrooms[className].listStudents();
  }

  removeClassroom(className) {
    if (!this.classrooms[className]) {
      throw new Error(`Classroom ${className} does not exist.`);
    }
    delete this.classrooms[className];
  }
}

module.exports = VirtualClassroomManager;
