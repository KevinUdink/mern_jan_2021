//-------------------------------------------------------------------------------------------
// by returning "this" object from our class methods we can continue to run other methods 
//    contained in the instance using chaining
//-------------------------------------------------------------------------------------------
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

// a child class can still chain with parent methods as long as the return "this"
  print() {
    console.log(`\nMy name is: ${this.name} and I am ${this.age} years old.`);
    return this;
  }
}


//-------------------------------------------------------------------------------------------
class Student extends Person {
  constructor(name, age, gpa = 4.0) {
    super(name, age);
    this.gpa = gpa;
    this.numDueAssignments = 0;
  }

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

    // return this so it can be chained with other instance methods
    return this;
  };

  turnInAssignment() {
    this.numDueAssignments -= 1;
    console.log(`\n${this.name} just turned in an assignment`);
    console.log(`\t${this.name} now has ${this.numDueAssignments} assignments due`)

    // return this so it can be chained with other instance methods
    return this;
  }
}

//-------------------------------------------------------------------------------------------
class Teacher extends Person {
  constructor(name, age, subject = "all") {
    super(name, age);
    this.subject = subject;
  }

  assignHomework(student) {
    student.numDueAssignments += 1;
    console.log(`\n${this.name} just assigned homework to ${student.name}`);
    console.log(`\t${student.name} now has ${student.numDueAssignments} assignments due`)

    // return this so it can be chained with other instance methods
    return this;
  }

  // we can "override" a parent's method with our own by creating a method with the same
  //    function name and telling it what we want it to do
  print() {
    let printSubject = "";
    if(this.subject === "all") {
      printSubject = "all subjects";
    } else {
      printSubject = this.subject;
    }
    console.log(`\n${this.name} is a teacher and teaches ${printSubject}`)

    // return this so it can be chained with other instance methods
    return this;
  }
}


//-------------------------------------------------------------------------------------------
// Let's test out our chaining
//-------------------------------------------------------------------------------------------
const teacher1 = new Teacher("Mrs. NiceAndFun", 28);  // using the default subject
const teacher2 = new Teacher("Mr. Mathman", 46, "Math");

const student1 = new Student("Billy", 8);
const student2 = new Student("Sally", 16);
const student3 = new Student("Mindy", 17);

teacher1.print().assignHomework(student1);

// Notice that the returned object is still the original teacher so they
//    can assign homework to any student we want!
// Also, we can split "chained" methods over multiple lines to make it easier to read
teacher2
  .print()
  .assignHomework(student2)
  .assignHomework(student3)
  .assignHomework(student2);

student1.print().getSchoolLevel().turnInAssignment();   

student2
  .print()
  .getSchoolLevel()
  .turnInAssignment()
  .turnInAssignment();   

console.log("\nWhat is in the object?")
console.log(student1);
console.log(teacher1);
