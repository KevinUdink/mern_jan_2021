let student1 = {
  name: "Billy",
  age: 8,
  getSchoolLevel: function() {  // no parameters required
    if(this.age < 11) {
      console.log(this.name + " is in elementary school.");
    }
    else if(this.age < 15) {
      console.log(this.name + " is in middle school.");
    }
    else {
      console.log(this.name + " is in high school.");
    }
  }
}

let student2 = {
  name: "Sally",
  age: 16,
  getSchoolLevel: function() {  // no parameters required
    if(this.age < 11) {
      console.log(this.name + " is in elementary school.");
    }
    else if(this.age < 15) {
      console.log(this.name + " is in middle school.");
    }
    else {
      console.log(this.name + " is in high school.");
    }
  }
}

student1.getSchoolLevel();   
student2.getSchoolLevel();   
// notice how the student object already has all the information
//  it needs and so there are no parameters
