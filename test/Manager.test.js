const Manager = require("../library/Manager");
const Employee = require("../library/Employee");

test("office number via constructor argument", () => {
  const testValue = 100;
  const Employees = new Manager("test", 1, "test@test.com", testValue);
  expect(Employees.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const Employees = new Manager("test", 1, "test@test.com", 100);
  expect(Employees.getRole()).toBe(testValue);
});

test("office number via getOffice()", () => {
  const testValue = 100;
  const Employees = new Manager("test", 1, "test@test.com", testValue);
  expect(Employees.getOfficeNumber()).toBe(testValue);
});
