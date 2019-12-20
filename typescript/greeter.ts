interface Person {
  firstName: string,
  lastName: string
}

class Student implements Person {
  // 맵버변수 
  fullName: string
  // 생성자
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string,
  ) {
    this.fullName = [firstName, middleInitial, lastName].join(' ')
  }
  // setter
  setFirstName(firstName) {
    this.firstName = firstName
  }
  // getFullName
  getFullName() {
    return this.fullName
  }
}

function greeter(person: Person) {
  const { firstName, lastName } = person
  return `Hi ${firstName} ${lastName}`
}

let user = new Student('shawn', 'L.', 'thecool')

console.log(greeter(user))