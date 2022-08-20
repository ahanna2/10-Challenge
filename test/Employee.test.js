const Employee = require("../library/Employee");

test("able to create an Employee instance", () => {
  const Employees = new Employee();
  expect(typeof(Employees)).toBe("object");
});

test("Name may be set by constructor parameters", () => {
  const name = "Adam";
  const Employees = new Employee(name);
  expect(Employees.name).toBe(name);
});

test("Id can be set using the constructor argument", () => {
  const testValue = 100;
  const Employees = new Employee("Foo", testValue);
  expect(Employees.id).toBe(testValue);
});

test("Email can be set using a constructor argument.", () => {
  const testValue = "test@test.com";
  const Employees = new Employee("Foo", 1, testValue);
  expect(Employees.email).toBe(testValue);
});

test("You can get the name with getName()", () => {
  const testValue = "Adam";
  const Employees = new Employee(testValue);
  expect(Employees.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const Employees = new Employee("Foo", testValue);
  expect(Employees.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const Employees = new Employee("Foo", 1, testValue);
  expect(Employees.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const Employees = new Employee("Alice", 1, "test@test.com");
  expect(Employees.getRole()).toBe(testValue);
});
