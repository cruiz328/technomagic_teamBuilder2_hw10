const Employee = require("../lib/Employee.js")

// employee object test
test("creates an employee object", () => {
  //    testing if employee is an object
  const employee = new Employee()
  expect(typeof employee).toBe("object")
})
test("employee constructor binds name property", () => {
  //    testing if employee is an object
  const name = "Dane"
  const employee = new Employee(name)
  expect(employee.name).toBe(name)
})

test("employee constructor binds id property", () => {
  //    testing if employee is an object
  const id = 14
  const employee = new Employee("Dane", id)
  expect(employee.id).toBe(id)
})

test("employee constructor binds email property", () => {
  //    testing if employee is an object
  const email = "myemail@soaos"
  // fill in all the properties with fillers except the one you are testing for
  const employee = new Employee("Dane", 14, email)
  expect(employee.email).toBe(email)
})

// testing getName() method
test("employee method returns name", () => {
  //    testing if employee is an object
  const name = "Dane"
  const employee = new Employee(name)
  expect(employee.getName()).toBe(name)
})

test("employee method returns id", () => {
  //    testing if employee is an object with hypathetical value
  const id = 14
  const employee = new Employee("Ulises", id)
  expect(employee.getId()).toBe(id)
})

test("employee method returns email", () => {
  //    testing if employee is an object with hypathetical value
  const email = "myemail@soaos"
  const employee = new Employee("Ulises", 14, email)
  expect(employee.getEmail()).toBe(email)
})
