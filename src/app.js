const readline = require('readline');
const VirtualClassroomManager = require('./manager');
const Command = require('./command');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const manager = new VirtualClassroomManager();
const command = new Command(manager);

console.log("Welcome to the Virtual Classroom Manager!");
console.log("Commands: add_classroom, add_student, schedule_assignment, submit_assignment, list_students, remove_classroom");

rl.on('line', (input) => {
  command.execute(input);
});
