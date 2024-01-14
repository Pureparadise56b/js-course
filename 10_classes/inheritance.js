/* Inheritance using Class */

class Staff {
  constructor(username) {
    this.username = username;
  }
  printMe() {
    console.log("Hello I am ", this.username);
  }
}

class Teacher extends Staff {
  constructor(username, teachingPost) {
    super(username); // send username to the base Class
    this.teachingPost = teachingPost;
  }
  greetTeacher() {
    console.log(
      `Good Morning ${this.username} sir, welcome to your ${this.teachingPost} class.`
    );
  }
}

const teacherOne = new Teacher("Hitesh", "Computer Science");

teacherOne.printMe();
teacherOne.greetTeacher();
console.log(teacherOne);

const staffOne = new Staff("ajay");

// staffOne.greetTeacher(); // can't acces this mehtod
staffOne.printMe();

console.log(staffOne instanceof Staff);
