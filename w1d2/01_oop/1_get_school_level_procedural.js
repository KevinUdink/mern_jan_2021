let student1Name = "Billy";
let student1Age = 8;
let student2Name = "Sally";
let student2Age = 16;

function getSchoolLevel(studentName, studentAge) {
  if(studentAge < 11) {
    console.log(studentName + " is in elementary school.");
  }
  else if(studentAge < 15) {
    console.log(studentName + " is in middle school.");
  }
  else {
    console.log(studentName + " is in high school.");
  }
}

getSchoolLevel(student1Name, student1Age);
getSchoolLevel(student2Name, student2Age);
getSchoolLevel(student3Name, student3Age);
getSchoolLevel(student4Name, student4Age);
