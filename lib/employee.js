class Employee {
  constructor(name, id, email) {
    this.name = name
    this.id = id
    this.email = email
  }

  // Add methods here
  getName() {
    // returns the name bound to employee
    return this.name
  }

  getId() {
    return this.id
  }

  getEmail() {
    return this.email
  }
  // this method automaticaly return a value so no property needs to be made for it like the others
  getRole() {
    return "Employee"
  }
}

module.exports = Employee
