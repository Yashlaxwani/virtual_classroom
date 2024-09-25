class Command {
    constructor(manager) {
      this.manager = manager;
    }
  
    execute(input) {
      const args = input.trim().split(' ');
      const command = args[0];
  
      try {
        switch (command) {
          case 'add_classroom':
            this.manager.addClassroom(args[1]);
            console.log(`Classroom ${args[1]} has been created.`);
            break;
          case 'add_student':
            this.manager.addStudent(args[1], args[2]);
            console.log(`Student ${args[1]} has been enrolled in ${args[2]}.`);
            break;
          case 'schedule_assignment':
            this.manager.scheduleAssignment(args[1], args.slice(2).join(' '));
            console.log(`Assignment for ${args[1]} has been scheduled.`);
            break;
          case 'submit_assignment':
            this.manager.submitAssignment(args[1], args[2], args.slice(3).join(' '));
            console.log(`Assignment submitted by Student ${args[1]} in ${args[2]}.`);
            break;
          case 'list_students':
            const students = this.manager.listStudents(args[1]);
            console.log(`Students in ${args[1]}: ${students.length ? students.join(', ') : 'None'}`);
            break;
          case 'remove_classroom':
            this.manager.removeClassroom(args[1]);
            console.log(`Classroom ${args[1]} has been removed.`);
            break;
          default:
            console.log('Invalid command.');
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  }
  
  module.exports = Command;
  