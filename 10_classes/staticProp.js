class Staff {
  constructor(username) {
    this.username = username;
  }
  printMe() {
    console.log("Hello I am ", this.username);
    console.log("ID : ", Staff.createID()); // can access only using class name
  }
  static createID() {
    return Math.floor(Math.random() * 10000);
  }
}

class Teacher extends Staff {
  constructor(username, teachingPost) {
    super(username);
    this.teachingPost = teachingPost;
  }
}

const teacherOne = new Teacher("ajay", "Physics");

console.log(teacherOne);
teacherOne.printMe();
// teacherOne.createID(); // can't access static method of class directly
