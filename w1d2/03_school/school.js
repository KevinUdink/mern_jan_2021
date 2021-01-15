//-------------------------------------------------------------------------------------------
// this is an "abstract" class - we do NOT intend to EVER make an instance
//    of this class!
// the purpose of an abstract class is to group common attributes and methods
//    in to a parent / super class to simplify and reduce code (DRY)
//-------------------------------------------------------------------------------------------
class Person {
  constructor(name, age, role, note = "") {
    this.name = name;
    this.age = age;
    this.note = note;
    this.address = "";
    this.accessLevel = 3;
    this.schoolLocation = "classroom";
    this.role = role;
    this.isVegan = false;
  }

  print() {
    console.log(`\nMy name is: ${this.name} and I am ${this.age} years old.`);
  }
}


//-------------------------------------------------------------------------------------------
// What is unique about a student?
//    unique pieces are placed in a child class
//-------------------------------------------------------------------------------------------
// setting a default value for the parameter 'gpa'
//    the default for gpa can be overridden when the object is instantiated / constructed
//        if you do not pass an argument for the 'gpa' it will default to '4.0'
//        if you pass in a value (argument) for 'gpa' it will use what is passed in
//-------------------------------------------------------------------------------------------
class Student extends Person {
  constructor(name, age, gpa = 4.0) {
    super(name, age, "student");
    this.gpa = gpa;
    this.grade = 8;
    this.detention = false;
    this.numHomeworkAssignments = 0;
  }

  // this method uses the "this" keyword to refer to the object that is invoking the function
  getSchoolLevel = function () {
    if (this.age < 11) {
      console.log("\n" + this.name + " is in elementary school.");
    }
    else if (this.age < 15) {
      console.log("\n" + this.name + " is in middle school.");
    }
    else {
      console.log("\n" + this.name + " is in high school.");
    }
  };

  turnInAssignment() {
    this.numHomeworkAssignments--;
    console.log(`${this.name} just turned in an assignment and now has ${this.numHomeworkAssignments} remaining`);
  }
}

//-------------------------------------------------------------------------------------------
// What is unique to a teacher?  
//-------------------------------------------------------------------------------------------
class Teacher extends Person {
  constructor(name, age, subject = "all") {
    super(name, age, "Teacher");
    this.subject = subject;
  }

  assignHomework(student) {
    student.numHomeworkAssignments++;
    if (student.numHomeworkAssignments > 4) {
      this.assignDetention(student);
      console.log(`${student.name} now has detention`);
    }
    console.log(`${this.name} just assigned homework to ${student.name}.`);
    console.log(`\tThey now have ${student.numHomeworkAssignments} left`);
  }

  assignDetention(student) {
    student.detention = true;
  }
}


//-------------------------------------------------------------------------------------------
// Let's create some instances and try this out!
//-------------------------------------------------------------------------------------------

const student1 = new Student("Billy", 16, 3.7);
const student2 = new Student("Sally", 15);

const teacher1 = new Teacher("Mr. Homework", 45, "Math");

teacher1.assignHomework(student1);
teacher1.assignHomework(student2);
teacher1.assignHomework(student2);
teacher1.assignHomework(student2);
teacher1.assignHomework(student2);
teacher1.assignHomework(student2);

student2.turnInAssignment();
student2.turnInAssignment();
student2.turnInAssignment();
student2.address = "123 main st";
console.log(student2);

